import { useState } from 'react';
import './App.css';
import HeroImage from './components/custom/HeroImage';
import Header from './components/sections/Header';
import Home from './components/sections/Home';
import Presentazione from './components/sections/Presentazione';
import Pittura from './components/sections/Pittura';
import ScritturaETeatro from './components/sections/ScritturaETeratro';
import Contacts from './components/sections/Contacts';
import Footer from './components/sections/Footer';

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    console.log("Theme toggle clicked");
    setIsDarkTheme((prev) => !prev);
  };


  const navLinks = [
    { name: 'Home', href: '/#' },
    { name: 'Presentazione', href: '/#presentazione' },
    { name: 'Pittura', href: '/#pittura' },
    { name: 'Scrittura e Teatro', href: '/#scrittura-e-teatro' },
    { name: 'Contatti', href: '/#contatti' },
  ];

  return (
    <div className={"app" + " " + (isDarkTheme ? "dark-theme" : "light-theme")}>
      <Header isDarkTheme={isDarkTheme} isDarkThemeClick={handleThemeToggle} navLinks={navLinks}/>
      <HeroImage />
      <main>
        <Home />
        <Presentazione />
        <Pittura />
        <ScritturaETeatro />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default App;
