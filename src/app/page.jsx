import { Bungee, Alfa_Slab_One, Rowdies } from "next/font/google";
import "./globals.css";
import {FaGithub, FaLinkedin, FaMedium, FaInstagram, FaSteam} from 'react-icons/fa';

import ContributionGraph from "../components/ContributionGraph";

const bungee = Bungee({ weight: "400", subsets: ["latin"] });
const alfa_slab_one = Alfa_Slab_One({ weight: "400", subsets: ["latin"] });
const rowdies = Rowdies({ weight: "300", subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative flex flex-col mx-2.5 my-2.5">
      {/* Foreground text */}
      <div className="flex flex-row justify-between my-5">
        <div className="flex flex-col my-5">
          <p className={`${rowdies.className} mx-3 text-4xl`}>
            Electrical Engineer, Software <br />
            Developer, and open source enthusiast
          </p>
          <p className="mx-3 my-5">
            I'm Debojyoti Ganguly, a developer passionate about
            learning and building<br />
            open-source software that is beneficial to developers and the world
            at large.
          </p>

          <div className="text-[#68ff5a] mx-2.5 my-4">
            <a href="https://github.com/MrBlueBlobGuy" className="px-1 hover:text-[#54c04a] transition"><FaGithub className="w-4 h-4 inline-block hover:underline"/> github </a>
            <a href="https://www.linkedin.com/in/debojyoti-ganguly-446274268" className="px-1 hover:text-[#54c04a] transition"> <FaLinkedin className="w-4 h-4 inline-block hover:underline"/> LinkedIn </a>
            <a href="https://medium.com/@debojyotiganguly70" className="px-1 hover:text-[#54c04a] transition"> <FaMedium className="w-4 h-4 inline-block hover:underline"/> Medium </a>
            <a href="https://instagram.com/blue.guy.takes.photos" className="px-1 hover:text-[#54c04a] transition"> <FaInstagram className="w-4 h-4 inline-block hover:underline"/> Instagram </a>
            <a href="https://steamcommunity.com/id/zorphis32/" className="px-1 hover:text-[#54c04a] transition"> <FaSteam className="w-4 h-4 inline-block hover:underline"/> Steam </a>
          </div>
        </div>
        
        <svg
          viewBox="0 0 1273 906"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[400px] h-auto"
        >
          <g>
            <path
              className="trace-path"
              d="M318.587 315.483V510.936L477.544 431.391V236.949M318.587 315.483L159.63 236.949M318.587 315.483L477.544 236.949M318.587 315.483V509.925L159.63 589.469M318.587 315.483L159.63 237.286L0.673828 315.483M318.587 315.483L159.63 394.016M477.544 236.949L318.587 158.753L159.63 236.949M477.544 236.949V432.402M477.544 236.949L318.587 158.416L477.544 80.2192L636.5 158.416L477.544 236.949ZM159.63 236.949V79.5451M159.63 589.469V394.016M159.63 589.469L0.673828 509.925V315.483M0.673828 315.483L159.63 394.016M159.63 79.5451L318.587 1.34863L477.544 79.5451L318.587 158.079L159.63 79.5451ZM795.457 395.701V237.286M795.457 237.286L636.5 159.09L477.544 237.286M795.457 237.286L636.5 315.82M477.544 237.286V431.728L601.139 491.762M477.544 237.286L636.5 315.82M636.5 315.82V472.887M954.414 668.003V473.561M954.414 473.561L795.457 395.364L636.5 473.561L795.457 552.094M954.414 473.561L795.457 552.094M954.414 473.561V669.014M954.414 473.561L795.457 395.027L954.414 316.831L1113.37 395.027L954.414 473.561ZM795.457 552.094L636.5 473.898L477.544 552.094M795.457 552.094L636.5 630.628M477.544 552.094V746.534L636.5 826.078V630.628M477.544 552.094L636.5 630.628M795.457 709.498V904.949M795.457 709.498L636.5 630.965M795.457 709.498L954.414 630.965M795.457 904.949L954.414 825.404V630.965M795.457 904.949L636.5 825.404V630.965M636.5 630.965L795.457 552.768L954.414 630.965M1113.37 552.431V747.882M1113.37 552.431L954.414 473.898M1113.37 552.431L1272.33 473.898M1113.37 747.882L1272.33 668.34V473.898M1113.37 747.882L954.414 668.34V473.898M954.414 473.898L1113.37 395.701L1272.33 473.898"
              stroke="url(#paint-linear)"
              strokeOpacity="0.6"
              strokeWidth="2"
            />
          </g>
          <defs>
            <linearGradient
              id="paint-linear"
              x1="1272.23"
              y1="479.474"
              x2="506.242"
              y2="-216.277"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#27b173" />
              <stop offset="0.619553" stopColor="#1a663f" />
              <stop offset="0.93102" stopColor="#26312d" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-row justify-center py-1">
        <span className={`${rowdies.className} text-3xl`}>Contribution raph</span>
      </div>

      <div className="flex flex-row justify-center bg-[#131313] mx-56 py-6 rounded">
        <ContributionGraph />
      </div>

    </div>
  );
}
