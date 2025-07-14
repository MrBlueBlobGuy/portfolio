import Image from "next/image";

import { Bungee } from "next/font/google";

import { FaReact, FaPython, FaGit } from "react-icons/fa";

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
})

export default function About() {
  return (
    <div className="px-4 py-6 max-w-screen-lg mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left column: Photo + Contact */}
        <div className="flex flex-col items-center col-span-1">
          <Image
            src="/Me.png"
            width={400}
            height={400}
            alt="Picture of Debojyoti"
            className="rounded-lg shadow-md"
            priority
          />

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-[#68ff5a] text-[#131313] rounded hover:bg-blue-700 hover:text-white transition"
          >
            View / Download Résumé
          </a>

          <a
            href="mailto:debojyotiganguly2023@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 py-2 text-[#68ff5a] hover:text-blue-700 transition"
          >
            debojyotiganguly2023@gmail.com
          </a>
        </div>

        {/* Right column: Bio + Tech List */}
        <div className="flex flex-col col-span-2 gap-4 text-gray-300">
          <h1 className={`${bungee.className} text-4xl  text-white`}>I am Debojyoti Ganguly</h1>

          <p>
            Self taught developer with a passion for building scalable and efficient software, and IoT systems.
          </p>

          <p>
            Beside that I am also pursuing my undergraduate degree in Electrical and Electronics Engineering.
            I am from <span className="text-[#68ff5a]">Kolkata, India</span> currently situated in{" "}
            <span className="text-[#68ff5a]">Chennai, India</span>.
          </p>

          <p>
            I am a strong believer in the process of lifelong learning and I am always eager to learn new
            technologies and skills.
          </p>

          <p>
            My interests include <span className="text-[#68ff5a]">IoT</span>,{" "}
            <span className="text-[#68ff5a]">Machine Learning</span>, and{" "}
            <span className="text-[#68ff5a]">Game Development</span>.
          </p>

          <p>
            Beyond learning, I enjoy working on electronics, literature, competitive programming and photography.
          </p>

          <p>
            Check out my posts on{" "}
            <a
              href="https://medium.com/@debojyotiganguly70"
              className="text-[#68ff5a] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium.
            </a>
          </p>

          {/* Technologies list here */}
          <ul className={"mt-6 flex flex-col gap-2 text-white text-base"}>
            <li className={`${bungee.className} text-2xl font-semibold`}>Technologies</li>
            <li className="flex items-center gap-2">
              <Image src="/tech_logos/react.png" width={16} height={16} alt="React" />
              React - UI Library
            </li>
            <li className="flex items-center gap-2">
              <Image src="/tech_logos/next.png" width={16} height={16} alt="Next.js" />
              Next.js - React Framework
            </li>
            <li className="flex items-center gap-2">
              <Image src="/tech_logos/tailwind.png" width={16} height={16} alt="Tailwind CSS" />
              Tailwind CSS - Styling Library
            </li>
            <li className="flex items-center gap-2">
              <Image src="/tech_logos/typescript.png" width={16} height={16} alt="TypeScript" />
              TypeScript - Superset of JavaScript
            </li>
            <li className="flex items-center gap-2">
              <Image src="/tech_logos/python.png" width={16} height={16} alt="Python" />
              Python - Programming Language
            </li>
            <li className="flex items-center gap-2">
              <Image src="/tech_logos/mongo.png" width={16} height={16} alt="MongoDB" />
              MongoDB - NoSQL Database
            </li>
          </ul>

          <ul className="mt-6 flex flex-col gap-2 text-white text-base">
            <li className={`${bungee.className} text-2xl font-semibold`}>Tools</li>
            <li className="flex items-center gap-2"><Image src={"/tech_logos/jetbrains.png"} width={16} height={16} alt="idea"/>IntelliJ IDEA - java IDE</li>
            <li className="flex items-center gap-2"><Image src={"/tech_logos/firefox.png"} width={16} height={16} alt="firefox"/>Mozzilla Firefox - Web Browser</li>
            <li className="flex items-center gap-2"><Image src={"/tech_logos/notion.png"} width={16} height={16} alt="Notion"/>Notion - Note taking and organising</li>
            <li className="flex items-center gap-2"><Image src={"/tech_logos/figma.png"} width={16} height={16} alt="idea"/>Figma - Design Tool</li>
            <li className="flex items-center gap-2"><Image src={"/tech_logos/vscode.png"} width={16} height={16} alt="idea"/>Visual Studio Code - Text Editor</li>
            <li className="flex items-center gap-2"><Image src={"/tech_logos/git.png"} width={16} height={16} alt="idea"/>Git - Version Control</li>
          </ul> 

          <ul className="mt-6 flex flex-col gap-2 text-white text-base">
            <li className={`${bungee.className} text-2xl font-semibold`}>Platforms</li>
            <li className="flex items-center gap-2"><Image src={"/tech_logos/github.png"} width={16} height={16} alt="Github"/>Github - Version control/hosting service</li>
            <li className="flex items-center gap-2"><Image src={"/tech_logos/spotify.png"} width={16} height={16} alt="spotify"/>Spotify - Music Streaming</li>
            <li className="flex items-center gap-2"><Image src={"/tech_logos/vercel.png"} width={16} height={16} alt="Vercel"/>Vercel - Hosting and Database</li>
          </ul> 

          <ul className={`mt-6 flex flex-col gap-2 text-white text-base`}>
            <li className={`${bungee.className} text-2xl font-semibold`}>Socials</li>
            <li className="flex items-center gap-2 text-[#68ff5a]"><Image src={"/socials/insta.png"} width={32} height={32} alt="Github"/><a href="https://instagram.com/blue.guy.takes.photos">@blue.guy.takes.photos</a></li>
            <li className="flex items-center gap-2 text-[#68ff5a]"><Image src={"/socials/linkedin.png"} width={32} height={32} alt="Github"/><a href="https://www.linkedin.com/in/debojyoti-ganguly-446274268/">LinkedIn</a></li>
          </ul> 


        </div>
      </div>
    </div>
  );
}
