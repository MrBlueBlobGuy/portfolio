import Image from "next/image";

export default function Header() {
  return (
    <header className="relative px-8 py-4">
      {/* Main Flex Container */}
      <div className="flex items-center justify-between md:flex-row">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo.png"
            width={48}
            height={48}
            alt="Logo"
            className="object-contain"
          />
        </a>

        {/* Navigation */}
        <nav className="flex gap-8 text-white text-2xl font-light">
          <a href="/about" className="hover:text-[#68ff5a] transform">About</a>
          <a href="/projects" className="hover:text-[#68ff5a] transform">Projects</a>
          <a href="https://medium.com/@debojyotiganguly70" className="hover:text-[#68ff5a] transform">Blog</a>
          <a href="/photos" className="hover:text-[#68ff5a] transform">Photos</a>
        </nav>
      </div>

      {/* Gradient border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />
    </header>
  );
}
