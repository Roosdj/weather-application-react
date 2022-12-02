import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import "./Weather.css";
import image from "./images/clear-sky-day.png";

export default function Weather() {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleData(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Type a city.."
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
          <h1 className="city">{weatherData.city}</h1>
          <ul className="time">
            <li>
              Last updated:
              <FormattedDate date={weatherData.date} />
            </li>
          </ul>
          <div className="row">
            <div className="col-sm-6 prospects">
              <img src={image} alt="sun" />
              <div className="temp">{Math.round(weatherData.temperature)}</div>
              <span className="units">
                <a href="https://www.shecodes.io/">°C</a> |
                <a href="https://www.shecodes.io/"> °F</a>
              </span>
            </div>
            <div className="col-6 mt-sm-3">
              <ul>
                <li className="text-capitalize">{weatherData.description}</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "68e4f0522f46113a622241oetb1b9619";
    let city = "Amsterdam";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleData);

    return <h1>loading..</h1>;
  }
}
