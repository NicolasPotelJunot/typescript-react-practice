import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";

import { TImerPadre } from "./components/TImerPadre";

import { ContadorRed } from "./components/ContadorRed";

import { Formulario } from "./components/Formulario";
import { Formulario2 } from "./components/Formulario2";

function App() {
  return (
    <div className="App">
      <h1>Vite + React + Typescript</h1>
      <hr />
      <Counter />
      <Usuario />
      <h2>useEfecct - useRef</h2>
      <hr />
      <TImerPadre />

      <h2>useReducer</h2>
      <hr />
      <ContadorRed />

      <h2>customHooks</h2>
      <hr />
      <Formulario />
      <br />
      <Formulario2 />
    </div>
  );
}

export default App;
