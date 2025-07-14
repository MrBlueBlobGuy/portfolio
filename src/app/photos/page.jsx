'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function GalleryPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) => {
        if (data.images) setImages(data.images);
      });
  }, []);

  return (
    <div className="px-6 py-8">
      <h1 className="text-4xl font-bold text-white mb-6">📸 My Gallery</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((filename, idx) => (
          <div key={idx} className="relative w-full aspect-square rounded overflow-hidden">
            <Image
              src={`/photos_portfolio/${filename}`}
              alt={`Photo ${idx + 1}`}
              fill
              className="object-cover rounded hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
