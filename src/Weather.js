import React from "react";
import "./Weather.css";
import image from "./images/clear-sky-day.png";

export default function Weather() {
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
        <h1>New York</h1>
        <ul>
          <li>Last updated: Wednesday 10:00</li>
          <li>Partly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={image} alt="sun" />
            <div className="temp">19</div>
            <span className="units">
              <a href="https://www.shecodes.io/">°C</a> |
              <a href="https://www.shecodes.io/">°F</a>
            </span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: 80%</li>
              <li>Wind: 10km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
