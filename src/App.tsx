import Header from './components/sections/Header';
//import logo from './logo.svg';
import './App.css';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

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
      {/* Other components go here */}
    </div>
  );
};

export default App;
