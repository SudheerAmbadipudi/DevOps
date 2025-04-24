import React, { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const res = await fetch(`https://wttr.in/${city}?format=j1`);
      const data = await res.json();
      setWeather(data.current_condition[0]);
    } catch (e) {
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4">Weather App</h1>
        <input
          type="text"
          className="w-full p-2 border rounded mb-2"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={fetchWeather} className="w-full bg-blue-500 text-white p-2 rounded mb-4">Get Weather</button>
        {weather && (
          <div>
            <p><strong>Temperature:</strong> {weather.temp_C}°C</p>
            <p><strong>Condition:</strong> {weather.weatherDesc[0].value}</p>
          </div>
        )}
      </div>
    </div>
  );
}