import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <p>
          This project was coded by Roos de Jonge , {""}
          <a
            href="https://github.com/Roosdj/weather-application-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </p>
      </footer>
    </div>
  );
}
