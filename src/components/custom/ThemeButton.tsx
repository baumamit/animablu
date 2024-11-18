import React from 'react';
import './ThemeButton.css'; // Add styles specific to the theme button

import { WiMoonAltWaningCrescent3 as MoonIcon } from "react-icons/wi";
import { MdOutlineLightMode as SunIcon } from "react-icons/md";

import { Tooltip } from 'react-tooltip';

interface ThemeButtonProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ isDarkTheme, toggleTheme }) => {
  return (
    <div
      id='theme-button'
      className={`isDarkTheme-${isDarkTheme}`}
      onClick={toggleTheme}
    >
      {isDarkTheme ? (
        <SunIcon
          data-tooltip-id="theme-tooltip"
          data-tooltip-content="Modalità chiara"
          className="theme-icon-sun theme-icon"
        />
      ) : (
        <MoonIcon
          data-tooltip-id="theme-tooltip"
          data-tooltip-content="Modalità scura"
          className="theme-icon-moon theme-icon"
        />
      )}
      <Tooltip id="theme-tooltip" />
    </div>
  );
};

export default ThemeButton;
