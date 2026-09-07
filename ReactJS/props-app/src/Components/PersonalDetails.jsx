import React from "react";

const PersonalDetails = ({ data }) => {
  console.log(data);

  return (
    <div>
      <h2>Name: {data.name}</h2>
      <h2>Age: {data.age}</h2>
    </div>
  );
};

export default PersonalDetails;
