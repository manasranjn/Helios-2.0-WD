import React from "react";
import Counter from "./Components/Counter";
import Calculator from "./Components/Calculator";

const App = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <Counter />

      <Calculator />
    </div>
  );
};

export default App;
