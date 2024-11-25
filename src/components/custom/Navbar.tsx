import React, { useState } from 'react';
import './Navbar.css'; // Optional: Add styles in a CSS file.
import ThemeButton from '../custom/ThemeButton'; // Import the new component

interface Link {
  name: string;
  href: string;
}

interface NavbarProps {
  navLinks: Link[];
  isDarkTheme: boolean;
  isDarkThemeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ navLinks, isDarkTheme, isDarkThemeClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
      <nav className="header-nav">
        {/* <div className='header-navbar-pusher'></div> */}

        {/* Fancy clickable burger menu icon */}
        <div className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Desktop navigation Menu */}
        <div className={`nav-container ${menuOpen ? 'open' : ''}`}>

          <ul className="nav-list">
            {navLinks.map((link, index) => (
              <li key={link.name} className="nav-item">
                <a href={link.href} onClick={() => setMenuOpen(false) /* Close burger menu on item click */}>
                  {link.name}
                </a>
                {index < navLinks.length - 1 && <span className="separator">|</span>}
              </li>
            ))}
          </ul>
          
        </div>
          <ThemeButton isDarkTheme={isDarkTheme} toggleTheme={isDarkThemeClick} />

      </nav>
  );
};

export default Navbar;
