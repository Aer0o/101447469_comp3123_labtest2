import React from "react";
import ForecastCard from "./ForecastCard";
import "../WeatherCard.css";

const WeatherCard = ({ weatherData, forecast }) => {
  if (!weatherData) return null;

  const { name, main, weather, wind } = weatherData;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <div className="weather-top">
        <div className="weather-main">
          <h2>{name}</h2>
          <h3>{weather[0].description}</h3>
          <h1>{main.temp.toFixed(1)}°C</h1>
        </div>
        <div className="weather-details">
          <img src={iconUrl} alt={weather[0].description} />
          <p>Humidity: {main.humidity}%</p>
          <p>Wind: {wind.speed} km/h</p>
          <p>Max Temp: {main.temp_max.toFixed(1)}°C</p>
          <p>Min Temp: {main.temp_min.toFixed(1)}°C</p>
        </div>
      </div>
      {/* Forecast Section */}
      <ForecastCard forecast={forecast} />
    </div>
  );
};

export default WeatherCard;
