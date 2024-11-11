import React from 'react';
import './Navbar.css'; // Optional: Add styles in a CSS file.

interface Link {
  name: string;
  href: string;
}

interface NavbarProps {
  navLinks: Link[];
}

const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  return (
      <nav className="header-nav">
        <div className='header-navbar-pusher'></div>

        <div id='navbar-fixed-background' className='navbar-fixed-background'></div>

        <ul className="nav-list">
          {navLinks.map((link, index) => (
            <li key={link.name} className="nav-item">
              <a href={link.href}>{link.name}</a>
              {index < navLinks.length - 1 && <span className="separator">|</span>}
            </li>
          ))}
        </ul>
      </nav>
  );
};

export default Navbar;
