import React, { useState } from "react";

export default function App() {
  const [result, setResult] = useState("");
  const handleClick = (value) => setResult(result + value);
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("Error");
    }
  };
  const clear = () => setResult("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-80">
        <input
          type="text"
          value={result}
          readOnly
          className="w-full p-2 text-xl text-right border mb-4 rounded"
        />
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
            <button
              key={btn}
              onClick={() => (btn === "=" ? calculate() : handleClick(btn))}
              className="p-4 bg-gray-200 rounded hover:bg-gray-300"
            >
              {btn}
            </button>
          ))}
          <button onClick={clear} className="col-span-4 bg-red-400 text-white p-2 rounded mt-2">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}