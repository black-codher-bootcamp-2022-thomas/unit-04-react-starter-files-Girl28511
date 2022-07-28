import logo from './logo.svg';
import './App.css';

function App() {
      const h1Style = {
        fontSize: "40px",
        backgroundColor: "yellow",
      };

      return (
        <div className="App">
    <h1>My React Page</h1> 
      <p className='bio'> This is my first React page made on 28th July 2022</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;


/* /*{ <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> </header>}*/ 