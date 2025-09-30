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
            <li><a href="#menu" onClick={() => setIsOpen(false)}>Menu</a></li>
            <li><a href="#info" onClick={() => setIsOpen(false)}>Info</a></li>
            <li><a href="tel:7735230947" onClick={() => setIsOpen(false)}>📞 Order Now</a></li>
          </ul>
        </nav>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <nav className="mobile-nav">
          <ul>
            <li><a href="#menu" onClick={() => setIsOpen(false)}>Menu</a></li>
            <li><a href="#info" onClick={() => setIsOpen(false)}>Info</a></li>
            <li><a href="tel:7735230947" onClick={() => setIsOpen(false)}>📞 Order Now</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
