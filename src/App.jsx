import { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    try {
      setError("");
      setWeather(null);

      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError("City not found");
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        location: `${name}, ${country}`,
        temp: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed,
      });
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 p-6">
      {/* Main Card */}
      <div className="bg-white/95 rounded-2xl shadow-2xl w-full max-w-md p-8 flex flex-col items-center text-center">
        
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-blue-700">🌦️ Weather Now</h1>

        {/* Search bar */}
       
    <div className="flex justify-center items-center gap-3 mb-6 w-full">
  <input
    type="text"
    placeholder="Enter city"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    className="w-48 px-4 py-2 rounded-l-lg border border-gray-300 text-black focus:outline-none"
  />
  <button
    onClick={getWeather}
    className="bg-blue-600 text-white px-4 py-2 rounded-r-lg font-semibold hover:bg-blue-700 transition"
  >    Search
          </button>
        </div>

        {/* Error message */}
        {error && (
          <p className="text-red-600 bg-red-100 px-4 py-2 rounded-lg mb-4 w-full">
            {error}
          </p>
        )}

        {/* Weather card */}
        {weather && (
          <div className="bg-blue-50 text-blue-800 p-6 rounded-xl shadow-inner w-full">
            <h2 className="text-xl font-semibold mb-2">{weather.location}</h2>
            <p className="text-lg">🌡 Temp: {weather.temp}°C</p>
            <p>💨 Wind: {weather.wind} km/h</p>
          </div>
        )}
      </div>
    </div>
  );
}   