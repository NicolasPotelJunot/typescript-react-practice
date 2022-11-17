import { useEffect, useRef, useState } from "react";

type TimerArgs = {
  millisegundos: number;
};

export const Timer = ({ millisegundos }: TimerArgs) => {
  const [segundos, setSegundos] = useState(0);
  const ref = useRef<number>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => setSegundos((s) => s + 1), millisegundos);
  }, [millisegundos]);

  return (
    <>
      <h4>
        Timer: <small>{segundos}</small>
      </h4>
    </>
  );
};
