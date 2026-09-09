import React from "react";
import AllProducts from "./Components/AllProducts";
import "./app.css";
import WeatherApp from "./Components/WeatherApp";

const App = () => {
  const textCss = {
    color: "white",
    fontSize: "50px",
    backgroundColor: "green",
  };
  return (
    <div>
      {/* <AllProducts /> */}

      <h1
        style={{ color: "white", fontSize: "50px", backgroundColor: "green" }}
      >
        App
      </h1>

      <p style={textCss}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <p className="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <WeatherApp />
    </div>
  );
};

export default App;
