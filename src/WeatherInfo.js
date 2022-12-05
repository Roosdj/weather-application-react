import React from "react";
import FormattedDate from "./FormattedDate.js";
import Temperature from "./Temperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container">
        <h1 className="city">{props.data.city}</h1>
        <ul className="time">
          <li>
            Last updated:
            <FormattedDate date={props.data.date} />
          </li>
        </ul>
        <div className="row">
          <div className="col-sm-6">
            <img src={props.data.icon} alt="weather-description" />
            <Temperature celsius={props.data.temperature} />
          </div>
          <div className="col-6 mt-sm-3">
            <ul>
              <li className="text-capitalize">{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
