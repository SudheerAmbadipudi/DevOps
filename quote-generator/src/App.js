import React, { useState } from "react";

const quotes = [
  "Believe in yourself!",
  "Stay positive, work hard, make it happen.",
  "Success is not final, failure is not fatal.",
  "Push yourself, because no one else will do it for you."
];

export default function App() {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Random Quote Generator</h1>
      <button onClick={getQuote} className="bg-yellow-500 px-4 py-2 text-white rounded">
        Generate Quote
      </button>
      {quote && <p className="mt-4 text-lg font-medium">"{quote}"</p>}
    </div>
  );
}