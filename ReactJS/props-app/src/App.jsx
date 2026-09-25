import React, { createContext } from "react";
import Contents from "./Components/Contents";
import AllStudents from "./Components/AllStudents";

export const dataContext = createContext();

const App = () => {
  const student = {
    name: "Sachin",
    age: 21,
  };

  return (
    <div>
      <Contents />
      <dataContext.Provider value={student}>
        <AllStudents student={student} />
      </dataContext.Provider>
    </div>
  );
};

export default App;
