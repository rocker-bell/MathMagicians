import React, { useState } from "react";
import "../../Styles/CalculatorApp.css";
import { evaluate } from "mathjs";

export default function CalculatorApp() {
  const [input, setInput] = useState(""); // stores the current input

  // Add number or operator to input
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Calculate the result
  const handleEquals = () => {
    try {
      // Use eval carefully – only for simple demo calculator
      // In production, a proper parser is safer
      const result = evaluate(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  // Clear the input
  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="CalculatorApp-wrapper">
      <h2 className="CalculatorApp-title">Calculator</h2>

      <div className="CalculatorApp-display">{input || "0"}</div>

      <div className="CalculatorApp-buttons">
        {/* Number buttons */}
        {[1,2,3,4,5,6,7,8,9,0].map((num) => (
          <button
            key={num}
            className="CalculatorApp-btn number"
            onClick={() => handleClick(num.toString())}
          >
            {num}
          </button>
        ))}

        {/* Operator buttons */}
        {["+", "-", "*", "/"].map((op) => (
          <button
            key={op}
            className="CalculatorApp-btn operator"
            onClick={() => handleClick(op)}
          >
            {op}
          </button>
        ))}

        {/* Other controls */}
        <button
          className="CalculatorApp-btn clear"
          onClick={handleClear}
        >
          C
        </button>
        <button
          className="CalculatorApp-btn equals"
          onClick={handleEquals}
        >
          =
        </button>
      </div>
    </div>
  );
}
