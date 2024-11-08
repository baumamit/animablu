import Header from './components/sections/Header';
import Presentazione from './components/sections/Presentazione';
import Home from './components/sections/Home';
import './App.css';

const App: React.FC = () => {

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Presentazione', href: '/#presentazione' },
    { name: 'Pittura', href: '/#pittura' },
    { name: 'Scrittura e Teatro', href: '/#scrittura-e-Teatro' },
    { name: 'Contatti', href: '/#sontatti' },
  ];

  const featuredImage = "/images/Francesco Canale.jpg";

  return (
    <div>
      <Header navLinks={navLinks}/>
      <img id="featured-image" src={featuredImage} alt="Francesco Canale pittura con la bocca" className="object-cover w-screen h-[400px] " />
      <main>
        <Home />
        <Presentazione />
      </main>
    </div>
  );
};

export default App;
