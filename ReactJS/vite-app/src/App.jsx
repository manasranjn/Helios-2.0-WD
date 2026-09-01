import React, { Fragment } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Content from "./Components/Contents";
import Footer from "./Components/Footer";
import Example from "./Components/Example";

const App = () => {
  return (
    <Fragment>
      {/* <div className="App">
        <h1>Hello, React!</h1>
        <h1>Hello, React!</h1>
        <h1>Hello, React!</h1>
      </div>
      <div className="App">
        <h1>Hello, React!</h1>
        <h1>Hello, React!</h1>
        <h1>Hello, React!</h1>
      </div> */}

      <Navbar />
      <Hero></Hero>
      <Content></Content>
      <Footer></Footer>

      <Example />
    </Fragment>
  );
};

export default App;
