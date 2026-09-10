import React, { useRef } from "react";

const UnControlled = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const addressRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const address = addressRef.current.value;

    const data = {
      name,
      email,
      password,
      address,
    };

    console.log(data);
  };

  return (
    <form className="p-5 rounded-lg bg-gray-400 w-sm flex flex-col gap-4">
      <input
        ref={nameRef}
        type="text"
        className="p-2 rounded border-none outline-none bg-white "
      />
      <input
        ref={emailRef}
        type="email"
        className="p-2 rounded border-none outline-none bg-white "
      />
      <input
        ref={passwordRef}
        type="password"
        className="p-2 rounded border-none outline-none bg-white "
      />
      <textarea
        ref={addressRef}
        className="p-2 rounded border-none outline-none bg-white "
      ></textarea>
      <button
        onClick={handleSubmit}
        className="p-2 rounded border-none outline-none bg-blue-500 text-white cursor-pointer "
      >
        Submit
      </button>
    </form>
  );
};

export default UnControlled;
