//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './components/BTVN-State/count';
import Student from './components/BTVN-State/student';
import Student2 from './components/Card/countStudent';
import CountNumber from './components/Card/Count';
function App() {
  return (
    <div className="App">
    {/*<header className="App-header">
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
      </header>*/}
      <CountNumber />
      <Student2/>
      <Counter/>
      <Student/>
    </div>
  );
}

export default App;

