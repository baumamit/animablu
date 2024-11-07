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
  
  return (
    <body>
      <Header links={navLinks} />
      <main className='container'>
        <Home />
        <Presentazione />
      </main>
    </body>
  );
};

export default App;
