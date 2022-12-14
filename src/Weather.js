import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import Forecast from "./Forecast.js";
import Line from "./Line.js";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleData(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      clothesIcon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
    });
  }

  function search() {
    let apiKey = "68e4f0522f46113a622241oetb1b9619";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Type a city.."
                  autoFocus="on"
                  onChange={updateCity}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <Line data={weatherData} />
          <Forecast city={weatherData.city} />
        </div>
      </div>
    );
  } else {
    search();
    return <h1>loading..</h1>;
  }
}
