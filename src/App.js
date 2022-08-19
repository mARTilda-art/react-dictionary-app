import logomartilda1 from "./logomartilda1.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={logomartilda1}
            className="App-logo img-fluid"
            alt="logomartilda1"
          />
        </header>
        <main>
          <Dictionary defaultKeyword="experience" />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            This project is created by{" "}
            <a
              href="https://www.martilda.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              mARTilda
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/mARTilda-art/react-dictionary-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            and is hosted on{" "}
            <a
              href="https://frolicking-treacle-3bb064.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
