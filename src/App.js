import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Application">
      <header className="Application-header">
        <img src={logo} className="Appplication-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Application-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
