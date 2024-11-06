import React from 'react';
import './Header.css'; // Optional: Add styles in a CSS file.
import logo from '../../assets/logo.png';

interface HeaderProps {
  links: { name: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="header-nav">
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export {};  // Add this line to make it a module
export default Header;