import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => setInput("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-4 rounded shadow w-72">
        <div className="mb-4 text-right text-xl font-mono">{input || "0"}</div>
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", ".", "0", "=", "+"].map((val) =>
            val === "=" ? (
              <button key={val} className="col-span-1 bg-blue-500 text-white py-2 rounded" onClick={calculate}>{val}</button>
            ) : (
              <button key={val} className="bg-gray-200 py-2 rounded" onClick={() => handleClick(val)}>{val}</button>
            )
          )}
          <button className="col-span-4 bg-red-400 text-white py-2 rounded" onClick={clear}>Clear</button>
        </div>
      </div>
    </div>
  );
}