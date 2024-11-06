import Header from './components/sections/Header';
import './App.css';

const App: React.FC = () => {

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Presentazione', href: '/#Presentazione' },
    { name: 'Pittura', href: '/#Pittura' },
    { name: 'Scrittura e Teatro', href: '/#Scrittura e Teatro' },
    { name: 'Contatti', href: '/#Contatti' },
  ];
  
  return (
    <div>
      <Header links={navLinks} />
    </div>
  );
};

export default App;
