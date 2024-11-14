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
  isDarkTheme: boolean;
  isDarkThemeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ navLinks, isDarkTheme, isDarkThemeClick }) => {

  return (
      <header className='header'>
        <div className='container header-contents'>
          <Logo />
          
          <Navbar navLinks={navLinks} />

          <div id='theme-button' className={'w-6 cursor-pointer text-3xl z-10 absolute right-6 isDarkTheme-'+isDarkTheme}
          onClick={() => isDarkThemeClick}>
            {isDarkTheme ? 
            <SunIcon data-tooltip-id="my-tooltip" data-tooltip-content="Modalità chiara" className='text-yellow-100' /> : 
            <MoonIcon data-tooltip-id="my-tooltip" data-tooltip-content="Modalità scura" className='text-gray-700' />}
            <Tooltip id="my-tooltip" />
          </div>
        </div>
      </header>
  );
};

export {};  // Add this line to make it a module
export default Header;