import "./index.css";
import { useState } from "react";
import { AnimatedCounter } from "react-animated-counter";

const App = () => {
  const [counterValue, setCounterValue] = useState<number>(500);

  const handleCounterUpdate = (increment: boolean) => {
    if (increment) {
      setCounterValue((c) => c + 1);
      return;
    }

    setCounterValue((c) => c - 1);
  };

  return (
    <div className="App">
      <h1>React Counter untuk PaaS</h1>
      <div className="counter-container">
        <AnimatedCounter value={counterValue} color="white" fontSize="40px" />
        <div className="button-container">
          <button onClick={() => handleCounterUpdate(false)}>Decrement</button>
          <button onClick={() => handleCounterUpdate(true)}>Increment</button>
        </div>
      </div>
    </div>
  );
};

export default App;
