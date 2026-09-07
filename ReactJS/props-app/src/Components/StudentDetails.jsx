import React from "react";
import PersonalDetails from "./PersonalDetails";
import AccademicDetails from "./AccademicDetails";

const StudentDetails = ({ student }) => {
  return (
    <div>
      <PersonalDetails data={student} />
      <AccademicDetails />
    </div>
  );
};

export default StudentDetails;
