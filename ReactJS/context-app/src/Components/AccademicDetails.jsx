import React, { useContext } from "react";
import { AppContext } from "../App";

const AccademicDetails = () => {
  // console.log(AppContext);

  const data = useContext(AppContext);

  console.log(data);

  return (
    <div>
      <h1>AccademicDetails</h1>
      <p>{data.name}</p>
    </div>
  );
};

export default AccademicDetails;
