import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = (number: number = 1) => {
    setCounter(counter + number);
  };

  return (
    <div className="mt-5">
      <h3>counter : useState</h3>
      <span>valor en: {counter}</span>
      <br />
      <button
        onClick={() => increment(1)}
        className="btn btn-outline-primary mt-2"
      >
        +1
      </button>
      <button
        onClick={() => increment(2)}
        className="btn btn-outline-primary mt-2"
      >
        +2
      </button>
      <button
        onClick={() => setCounter(0)}
        className="btn btn-outline-danger mt-2"
      >
        reset
      </button>
    </div>
  );
};
