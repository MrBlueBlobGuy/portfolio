'use client';

import { useEffect, useState } from 'react';

export default function ContributionGraph() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/contributions')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  // Filter and group
  const dayItems = data.filter((d) => d.type === 'day');
  const monthLabels = data.filter((d) => d.type === 'month');

  const columns = [];
  for (let i = 0; i < dayItems.length; i += 7) {
    columns.push(dayItems.slice(i, i + 7));
  }

  // Layout config
  const boxSize = 12;
  const boxGap = 3;
  const topPadding = 20;

  return (
    <div className="overflow-x-auto">
      <svg
        width={columns.length * (boxSize + boxGap)}
        height={topPadding + 7 * (boxSize + boxGap)}
        className="text-sm"
      >
        {/* Month Labels */}
        {monthLabels.map((label) => {
          const colIndex = Math.floor(label.index / 7);
          return (
            <text
              key={label.month + label.index}
              x={colIndex * (boxSize + boxGap)}
              y={10}
              fontSize="10"
              fill="#aaa"
            >
              {label.month}
            </text>
          );
        })}

        {/* Contribution Squares */}
        {columns.map((week, x) =>
          week.map((day, y) => {
            const level = Math.min(day.contributionCount, 4);
            const colors = [
              '#161b22', // 0 contributions
              '#0e4429',
              '#006d32',
              '#26a641',
              '#39d353',
            ];
            const color = colors[level];

            return (
              <rect
                key={day.date}
                x={x * (boxSize + boxGap)}
                y={topPadding + y * (boxSize + boxGap)}
                width={boxSize}
                height={boxSize}
                rx="2"
                ry="2"
                fill={color}
              >
                <title>
                  {`${day.date}: ${day.contributionCount} contribution${
                    day.contributionCount !== 1 ? 's' : ''
                  }`}
                </title>
              </rect>
            );
          })
        )}
      </svg>
    </div>
  );
}
