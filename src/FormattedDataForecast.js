import React from "react";

export default function FormattedDateForecast(props) {
  let date = new Date(props.data.time * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];

  let icon = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`;

  return (
    <div className="FormattedDateForecast">
      <div>{day}</div>
      <div className="forecast-icon">
        <img src={icon} alt="weather-icon" />
      </div>
      <span className="forecast-max">
        {Math.round(props.data.temperature.maximum)}°
      </span>
      <span className="forecast-min">
        {" "}
        {Math.round(props.data.temperature.minimum)}°
      </span>
    </div>
  );
}
