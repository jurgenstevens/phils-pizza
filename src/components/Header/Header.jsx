import { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="header-inner">
        {/* Title first */}
        <div className="header-top">
          <h1 className="header-title">THE BEST IN CHICAGO</h1>

          {/* Hamburger (mobile only) */}
          <div className="hamburger-wrapper">
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              color="#ffffff"
              size={28}
              direction="right"
            />
          </div>
        </div>

        {/* Desktop nav stacked under title */}
        <nav className="desktop-nav">
          <ul>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#order-now">Order Now</a></li>
          </ul>
        </nav>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <nav className="mobile-nav">
          <ul>
            <li><a href="#menu" onClick={() => setIsOpen(false)}>Menu</a></li>
            <li><a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            <li><a href="#order-now" onClick={() => setIsOpen(false)}>Order Now</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
