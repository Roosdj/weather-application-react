import React, { useState, useEffect } from "react";
import Axios from "axios";
import FormattedDataForecast from "./FormattedDataForecast";
import "./Forecast.css";

export default function Forecast(props) {
  let [weatherDataForecast, setWeatherDataForecast] = useState(null);
  let [ready, setReady] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.city]);

  function handleDataForecast(response) {
    setWeatherDataForecast({
      ready: true,
      data: response.data.daily,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <FormattedDataForecast data={weatherDataForecast.data[1]} />
          </div>
          <div className="col">
            <FormattedDataForecast data={weatherDataForecast.data[2]} />
          </div>
          <div className="col">
            <FormattedDataForecast data={weatherDataForecast.data[3]} />
          </div>
          <div className="col">
            <FormattedDataForecast data={weatherDataForecast.data[4]} />
          </div>
          <div className="col">
            <FormattedDataForecast data={weatherDataForecast.data[5]} />
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
