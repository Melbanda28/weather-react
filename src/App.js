import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <footer>
        This was coded by
        <a
          href="https://www.shecodes.io/graduates/123422-mellania-banda"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mellania Banda
        </a>
        , code hosted on
        <a
          href="https://github.com/Melbanda28/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git Hub
        </a>
        and website hosted on
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
