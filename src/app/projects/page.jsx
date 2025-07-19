import ProjectHolder from '../../components/projectHolder';

export default function Projects() {
  return (
    <div className="flex flex-col mx-8 mt-10">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <p className="text-zinc-600 dark:text-zinc-300 mb-10 max-w-2xl">
        I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, <br /> check out the code and contribute if you have ideas on how it can be improved.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        <ProjectHolder imageUrl="/projects_images/eliza.png">
          <h2 className="text-xl font-semibold">Eliza</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            An AI based mental health assitant
          </p>
        </ProjectHolder>

        <ProjectHolder imageUrl="/projects_images/eliza.png">
          <h2 className="text-xl font-semibold">Blog Template Svelte Markdown</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            A template to build modern blogs using Svelte, and Markdown
          </p>
        </ProjectHolder>
      </div>
    </div>
  );
}
