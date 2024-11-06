import React, { useState } from 'react';
import './Header.css'; // Optional: Add styles in a CSS file.
import logo from '../../assets/logo.png';
import logoSmall from '../../assets/logo-w300px.png';

import '../../light-theme.css';  // Default theme
import '../../dark-theme.css';    // Dark theme

import { WiMoonAltWaningCrescent3 as MoonIcon } from "react-icons/wi";
import { MdOutlineLightMode as SunIcon } from "react-icons/md";


interface HeaderProps {
  links: { name: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <header className={(isDarkTheme ? "dark-theme" : "light-theme") + " " + "header"}>
      <div className="header-logo">
        <a href="./">
          <img fetchPriority="high" width="481" height="181" src={logo} className="attachment-full size-full wp-image-64" alt="Logo" srcSet={logo+" 481w, "+logoSmall+" 300w"} sizes="(max-width: 481px) 100vw, 481px" />
        </a>
      </div>

      <nav className="header-nav">
        <ul className="no-bullets">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className='cursor-pointer text-3xl' onClick={() => setIsDarkTheme(!isDarkTheme)}>
        {isDarkTheme ? <SunIcon className='text-yellow-100' /> : <MoonIcon className='text-gray-700' />}
      </div>

    </header>
  );
};

export {};  // Add this line to make it a module
export default Header;