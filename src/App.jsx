import "./App.css";
import Button from "./components/button/Button";

function App() {
  return (
    <>
      <header>
        <nav>
          <a href="http://google.com">Google</a>
          <a href="http://wikipedia.com">Wikipedia</a>
        </nav>
      </header>
      <main>
        <h1>Hello!</h1>
        <div className="containerButtons">
          <Button text="Hola" />
          <Button text="Adiós" />
        </div>
      </main>
    </>
  );
}

export default App;
