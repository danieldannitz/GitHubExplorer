import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);
  function handleCounterIncrement() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button type="button" onClick={handleCounterIncrement}>
        Increment
      </button>
    </div>
  );
}
