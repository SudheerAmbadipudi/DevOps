import React, { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&current_weather=true`
    );
    const data = await res.json();
    setWeather(data.current_weather);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Weather App</h1>
      <input
        className="p-2 border rounded mb-2"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City (static API)"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={getWeather}>
        Get Weather
      </button>
      {weather && (
        <div className="mt-4 text-center">
          <p>Temperature: {weather.temperature}°C</p>
          <p>Wind Speed: {weather.windspeed} km/h</p>
        </div>
      )}
    </div>
  );
}