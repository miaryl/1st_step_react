import "./App.css";
import Button from "./components/button/Button";
import Names from "./components/names/Names";

function App() {
  return (
    <>
      <header>
        <Button text="Bienvenidas"/>
        <nav>
          <a href="http://google.com">Google</a>
          <a href="http://wikipedia.com">Wikipedia</a>
        </nav>
      </header>
      <main>
        <h1>Hello!</h1>
        <div className="containerButtons">
          <Button text="Hola" color="light"/>
          <Button text="Adiós" />
        </div>
        <Names />
      </main>
    </>
  );
}

export default App;
