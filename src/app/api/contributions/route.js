export async function GET(request) {
    const username = 'MrBlueBlobGuy';
    const token = process.env.GITHUB_TOKEN;
  
    if (!token) {
      return new Response(JSON.stringify({ error: 'Missing GITHUB_TOKEN' }), { status: 500 });
    }
  
    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;
  
    try {
      const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
  
      if (!res.ok) {
        const errText = await res.text();
        console.error('GitHub API HTTP error:', res.status, errText);
        return new Response(JSON.stringify({ error: `GitHub API error: ${res.status}` }), { status: 500 });
      }
  
      const json = await res.json();
  
      if (!json?.data?.user) {
        console.error("GitHub GraphQL error:", JSON.stringify(json, null, 2));
        return new Response(JSON.stringify({ error: json.errors || 'Unexpected GitHub response' }), { status: 500 });
      }
  
      const days = json.data.user.contributionsCollection.contributionCalendar.weeks
        .flatMap((week) => week.contributionDays);
  
      // Inject month indicators
      const enriched = [];
      let lastMonth = '';
      for (let i = 0; i < days.length; i++) {
        const day = days[i];
        const date = new Date(day.date);
        const month = date.toLocaleString('default', { month: 'short' });
  
        if (month !== lastMonth && date.getDate() <= 7) {
          enriched.push({
            type: 'month',
            month,
            index: i,
          });
          lastMonth = month;
        }
  
        enriched.push({ ...day, type: 'day' });
      }
  
      return new Response(JSON.stringify(enriched), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Fetch or JSON parsing error:', error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }
  