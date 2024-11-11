import './App.css';
import HeroImage from './components/custom/HeroImage';
import Header from './components/sections/Header';
import Presentazione from './components/sections/Presentazione';
import Home from './components/sections/Home';
import Contacts from './components/sections/Contacts';
import Footer from './components/sections/Footer';

const App: React.FC = () => {

  const navLinks = [
    { name: 'Home', href: '/#' },
    { name: 'Presentazione', href: '/#presentazione' },
    { name: 'Pittura', href: '/#pittura' },
    { name: 'Scrittura e Teatro', href: '/#scrittura-e-Teatro' },
    { name: 'Contatti', href: '/#contatti' },
  ];

  return (
    <div>
      <Header navLinks={navLinks}/>
      <HeroImage />
      <main>
        <Home />
        <Presentazione hrefSection={navLinks[1].href} />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default App;
