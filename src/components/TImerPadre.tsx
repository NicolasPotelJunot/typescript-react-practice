import { useState } from "react";
import { Timer } from "./Timer";

export const TImerPadre = () => {
  const [millisegundos, setMillisegundos] = useState(1000);

  return (
    <>
      <span>Milisegundos {millisegundos}</span>
      <br />
      <button
        onClick={() => setMillisegundos(1000)}
        className="btn btn-outline-primary"
      >
        1000
      </button>
      <button
        onClick={() => setMillisegundos(2000)}
        className="btn btn-outline-primary"
      >
        2000
      </button>
      <Timer millisegundos={millisegundos} />
    </>
  );
};
