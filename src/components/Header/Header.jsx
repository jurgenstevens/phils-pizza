import { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="header-inner">
        <h1 className="header-title">THE BEST OF THE SOUTHSIDE</h1>

        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color="#ffffff"        // match your white text
          size={28}              // adjust size if you like
          direction="right"      // optional: controls animation direction
        />
      </div>

      {isOpen && (
        <nav className="mobile-nav">
          <ul>
            <li><a href="#menu" onClick={() => setIsOpen(false)}>Menu</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
