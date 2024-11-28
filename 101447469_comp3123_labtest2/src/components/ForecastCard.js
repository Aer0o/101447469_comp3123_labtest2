import React from "react";
import "../ForecastCard.css";

const ForecastCard = ({ forecast }) => {
  // Function to group forecast items by day
  const groupByDay = (list) => {
    const days = {};
    list.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const day = date.toLocaleDateString("en-US", { weekday: "long" });
      if (!days[day]) {
        days[day] = item; // Only keep the first entry for each day
      }
    });
    return Object.values(days); // Return unique entries
  };

  const dailyForecast = groupByDay(forecast.list);

  const forecastItems = dailyForecast.map((item) => {
    const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
    const date = new Date(item.dt * 1000);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

    return (
      <div key={item.dt} className="forecast-item">
        <h6>{dayName}</h6>
        <img src={iconUrl} alt={item.weather[0].description} />
        <p>{item.main.temp.toFixed(1)}°C</p>
      </div>
    );
  });

  return <div className="forecast-card">{forecastItems}</div>;
};

export default ForecastCard;