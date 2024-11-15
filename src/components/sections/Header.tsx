import React from 'react';
import './Header.css';
import '../../light-theme.css';
import '../../dark-theme.css';

import Logo from '../custom/Logo';
import Navbar from '../custom/Navbar';

interface HeaderProps {
  navLinks: { name: string; href: string }[];
  isDarkTheme: boolean;
  isDarkThemeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ navLinks, isDarkTheme, isDarkThemeClick }) => {
  return (
    <header className="header">
      <div className="container header-contents">
        <Logo />
        <Navbar  isDarkTheme={isDarkTheme} isDarkThemeClick={isDarkThemeClick} navLinks={navLinks} />
      </div>
    </header>
  );
};

export default Header;
