import React from 'react';

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
      <ul className="no-bullets">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
