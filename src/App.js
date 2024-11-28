import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input)); // Use eval cautiously in production!
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult(0);
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "1", "2", "3", "+",
    "4", "5", "6", "-",
    "7", "8", "9", "*",
    "C", "0", "=", "/"
  ];

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="display">
        <div>{input || "0"}</div>
        <div>Result: {result}</div>
      </div>
      <div className="buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className="button"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
