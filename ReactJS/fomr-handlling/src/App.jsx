import React from "react";
import Example from "./Components/Example";
import UnControlled from "./Components/UnControlled";
import Controlled from "./Components/Controlled";

const App = () => {
  return (
    <div className="h-screen flex justify-center items-center w-full">
      {/* <Example /> */}

      {/* <UnControlled /> */}

      <Controlled />
    </div>
  );
};

export default App;
