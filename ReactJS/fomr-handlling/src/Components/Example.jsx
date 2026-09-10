import React, { useRef } from "react";

const Example = () => {
  const buttonRef = useRef();
  const headingRef = useRef();

  //   console.log(buttonRef);

  const handleClick = () => {
    // console.log(buttonRef.current);
    // console.log(buttonRef);
    // console.log(headingRef.current);
    // console.log(headingRef);

    headingRef.current.style.color = "red";
  };

  return (
    <div>
      <h2 ref={headingRef}>This is an example of Reference</h2>
      <button
        ref={buttonRef}
        onClick={handleClick}
        className="bg-blue-600 px-10 py-2 cursor-pointer"
      >
        Click Here
      </button>
    </div>
  );
};

export default Example;
