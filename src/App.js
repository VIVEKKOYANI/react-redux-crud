import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link,Match } from 'react-router-dom';
import gamesPage from './gamesPage';


function App() {
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
          <Link to="games">Games</Link>
        </a>

        <Match pattern="/games" component={gamesPage} />
      </header>
    </div>
  );
}

export default App;
