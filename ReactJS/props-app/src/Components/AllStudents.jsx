import React from "react";
import StudentDetails from "./StudentDetails";

const AllStudents = ({ student }) => {
  return (
    <div>
      <StudentDetails student={student} />
    </div>
  );
};

export default AllStudents;
