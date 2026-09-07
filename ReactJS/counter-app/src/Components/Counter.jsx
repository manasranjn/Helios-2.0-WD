import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="w-1/3 bg-slate-500 p-10 rounded-lg text-white">
      <h1 className="text-4xl text-center">Count: {count}</h1>

      <div className="flex gap-6 justify-center mt-6">
        <button
          className="cursor-pointer px-6 py-2 rounded-md text-lg bg-blue-500"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="cursor-pointer px-6 py-2 rounded-md text-lg bg-blue-500"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="cursor-pointer px-6 py-2 rounded-md text-lg bg-blue-500"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
