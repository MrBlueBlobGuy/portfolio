'use client';

import Image from 'next/image';

export default function ProjectHolder({ imageUrl, children }) {
  return (
    <div className="flex flex-col items-start rounded-2xl shadow-md p-4 bg-white dark:bg-zinc-900 hover:shadow-xl transition-all duration-300">
      <div className="w-full h-48 relative mb-4 overflow-hidden rounded-xl">
        <Image
          src={imageUrl}
          alt="Project Thumbnail"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
}
