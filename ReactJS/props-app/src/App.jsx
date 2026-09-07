import React from "react";
import Contents from "./Components/Contents";
import AllStudents from "./Components/AllStudents";

const App = () => {
  const student = {
    name: "Sachin",
    age: 21,
  };

  return (
    <div>
      <Contents />
      <AllStudents />
    </div>
  );
};

export default App;
