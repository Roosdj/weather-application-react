import React from "react";
import FormattedDate from "./FormattedDate.js";

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
          <div className="col-sm-6 prospects">
            <img src={props.data.icon} alt="sun" />
            <div className="temp">{Math.round(props.data.temperature)}</div>
            <span className="units">
              <a href="https://www.shecodes.io/">°C</a> |
              <a href="https://www.shecodes.io/"> °F</a>
            </span>
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
