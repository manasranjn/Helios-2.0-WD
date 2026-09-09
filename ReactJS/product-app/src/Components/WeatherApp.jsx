import React from "react";
import style from "./weather.module.css";

const WeatherApp = () => {
  console.log(style);

  return <div className={style.box}>WeatherApp</div>;
};

export default WeatherApp;
