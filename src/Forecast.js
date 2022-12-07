import React, { useState } from "react";
import Axios from "axios";
import FormattedDateForecast from "./FormattedDateForecast";
import "./Forecast.css";

export default function Forecast(props) {
  let [weatherDataForecast, setWeatherDataForecast] = useState({
    ready: false,
  });

  function handleDataForecast(response) {
    console.log(response.data);
    setWeatherDataForecast({
      ready: true,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[0].condition.icon}.png`,
      max: Math.round(response.data.daily[1].temperature.maximum),
      min: Math.round(response.data.daily[1].temperature.minimum),
      date: new Date(response.data.daily[1].time * 1000),
    });
  }

  if (weatherDataForecast.ready) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <div className="forecast-day">
              <FormattedDateForecast date={weatherDataForecast.date} />
            </div>
            <div className="forecast-icon">
              <img src={weatherDataForecast.icon} alt="weather-icon" />
            </div>
            <span className="forecast-max">{weatherDataForecast.max}°</span>
            <span className="forecast-min"> {weatherDataForecast.min}°</span>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "68e4f0522f46113a622241oetb1b9619";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    Axios.get(apiUrl).then(handleDataForecast);
    return null;
  }
}
