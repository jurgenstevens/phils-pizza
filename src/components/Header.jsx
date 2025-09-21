import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Tagline */}
        <h1 className="text-xl md:text-2xl font-bold text-center flex-1">
          THE BEST OF THE SOUTHSIDE
        </h1>

        {/* Hamburger Icon */}
        <button
          className="ml-4 flex flex-col justify-between w-6 h-5 focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 bg-black"></span>
          <span className="block h-0.5 bg-black"></span>
          <span className="block h-0.5 bg-black"></span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 ml-6">

        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a href="#menu" onClick={() => setIsOpen(false)}>Menu</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
