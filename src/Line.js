import React from "react";
import "./Line.css";

export default function Line(props) {
  let description = props.data.clothesIcon;

  if (description === "clear-sky-day" || description === "few-clouds-day") {
    return (
      <div className="Line">
        <hr className="upper-hr" />
        <p>Go outside, the sun is out!</p>
        <hr className="lower-hr" />
      </div>
    );
  } else {
    if (description === "shower-rain-day" || description === "rain-day") {
      return (
        <div className="Line">
          <hr className="upper-hr" />
          <p>Don't forget your embrella today</p>
          <hr className="lower-hr" />
        </div>
      );
    } else {
      if (
        description === "scattered-clouds-day" ||
        description === "broken-clouds-day"
      ) {
        return (
          <div className="Line">
            <hr className="upper-hr" />
            <p>It's cloudy today</p>
            <hr className="lower-hr" />
          </div>
        );
      } else {
        if (description === "thunderstorm-day") {
          return (
            <div className="Line">
              <hr className="upper-hr" />
              <p>Watch out today, there might be thunderstorm</p>
              <hr className="lower-hr" />
            </div>
          );
        } else {
          if (description === "snow-day") {
            return (
              <div className="Line">
                <hr className="upper-hr" />
                <p>It will be snowy today</p>
                <hr className="lower-hr" />
              </div>
            );
          } else {
            if (description === "mist-day") {
              return (
                <div className="Line">
                  <hr className="upper-hr" />
                  <p>Watch out today, it might be foggy</p>
                  <hr className="lower-hr" />
                </div>
              );
            } else {
              return (
                <div className="Line">
                  <hr className="upper-hr" />
                  <p>Enjoy the night</p>
                  <hr className="lower-hr" />
                </div>
              );
            }
          }
        }
      }
    }
  }
}
