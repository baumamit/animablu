import React, { useState } from 'react';
import './Header.css'; // Optional: Add styles in a CSS file.
import '../../light-theme.css';  // Default theme
import '../../dark-theme.css';    // Dark theme

import { WiMoonAltWaningCrescent3 as MoonIcon } from "react-icons/wi";
import { MdOutlineLightMode as SunIcon } from "react-icons/md";

import { Tooltip } from 'react-tooltip' // To add hints on hover over elements 
import Logo from '../custom/Logo';
import Navbar from '../custom/Navbar';

interface HeaderProps {
  navLinks: { name: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
      <header className={(isDarkTheme ? "dark-theme" : "light-theme") + " " + "header"}>
        <div id='navbar-fixed-background' className='navbar-fixed-background z-0'></div>

        <div className='logo-box'>
          <Logo />
        </div>
        
        <div className='navbar-box'>
          <Navbar navLinks={navLinks} />
        </div>

        <div className='w-6 cursor-pointer text-3xl z-10' onClick={() => setIsDarkTheme(!isDarkTheme)}>
          {isDarkTheme ? <SunIcon data-tooltip-id="my-tooltip" data-tooltip-content="Modalità chiara" className='text-yellow-100' /> : <MoonIcon data-tooltip-id="my-tooltip" data-tooltip-content="Modalità scura" className='text-gray-700' />}
          <Tooltip id="my-tooltip" />
        </div>
      </header>
  );
};

export {};  // Add this line to make it a module
export default Header;