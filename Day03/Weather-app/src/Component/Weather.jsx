// Weather.jsx

import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    weatherFetch();
  }, []);

  const weatherFetch = async () => {
    try {
      const res = await axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=23.0225&longitude=72.5714&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code"
      );

      setWeather(res.data.current);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="weather-page">
      <div className="container">

        <h1 className="title">Weather Dashboard</h1>

        {weather && (
          <div className="weather-card">

            <div className="top">

              <div>
                <h2>Ahmedabad</h2>
                <p>{new Date().toDateString()}</p>
              </div>

              <div className="temperature">
                {weather.temperature_2m}°
              </div>

            </div>

            <div className="divider"></div>

            <div className="weather-grid">

              <div className="box">
                <h4>Temperature</h4>
                <span>{weather.temperature_2m} °C</span>
              </div>

              <div className="box">
                <h4>Humidity</h4>
                <span>{weather.relative_humidity_2m}%</span>
              </div>

              <div className="box">
                <h4>Wind Speed</h4>
                <span>{weather.wind_speed_10m} km/h</span>
              </div>

              <div className="box">
                <h4>Weather Code</h4>
                <span>{weather.weather_code}</span>
              </div>

            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;