import axios from "axios";

const API_KEY = "722030da39f366ed80cc9cdbd7b2bfc7";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    console.log("Weather Data:", response.data); // Log response here
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error.response);
    throw error;
  }
};

export const fetchWeatherForecast = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast data:", error);
    throw error;
  }
};