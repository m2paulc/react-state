import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import Clock from './components/Clock';
import Time from './components/Time';
import Clicker from './components/Clicker';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={ viteLogo } className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={ reactLogo } className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={ () => setCount((count) => count + 1) }>
          count is { count }
        </button>
        <Clicker />
      </div>
      {/* Class component (Clock) vs Functional component (Time) */ }
      {/* <Clock /> */ }
      <Time />
    </>
  );
}

export default App;
