import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather, fetchWeatherForecast } from "./api";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setError("");
    try {
      const data = await fetchWeather(city);
      const forecast = await fetchWeatherForecast(city);
      setWeatherData(data);
      setForecastData(forecast);
    } catch (err) {
      setWeatherData(null);
      setForecastData(null);
      setError("City not found! Please try again.");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Weather Forecast</h1>
        <SearchBar onSearch={handleSearch} />
        {error && <div className="error">{error}</div>}
        {weatherData && <WeatherCard weatherData={weatherData} forecast={forecastData} />}
      </div>
    </div>
  );
};

export default App;
