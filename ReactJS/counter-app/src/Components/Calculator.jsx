import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const handleNumber = (num) => {
    setDisplay(display === "0" ? num : display + num);
  };

  const handleOperator = (operator) => {
    setDisplay(display + operator);
  };

  const handleEqual = () => {
    try {
      const result = eval(display);
      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleDecimal = () => {
    setDisplay(display + ".");
  };

  return (
    <div className="bg-black text-white p-6 rounded-lg w-xs">
      <h2 className="text-5xl text-right mb-6">{display}</h2>

      <div className="text-xl flex gap-4">
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={handleClear}
              className="px-4 py-2 rounded-xl bg-red-300 text-black"
            >
              AC
            </button>

            <button
              onClick={handleEqual}
              className="px-4 py-2 rounded-xl bg-red-300 text-black"
            >
              =
            </button>

            <button
              onClick={() => handleNumber("00")}
              className="px-4 py-2 rounded-xl bg-red-300 text-black"
            >
              00
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumber(String(num))}
                className="px-4 py-2 rounded-xl bg-gray-500"
              >
                {num}
              </button>
            ))}

            <button
              onClick={() => handleNumber("%")}
              className="px-4 py-2 rounded-xl bg-gray-500"
            >
              %
            </button>

            <button
              onClick={() => handleNumber("0")}
              className="px-4 py-2 rounded-xl bg-gray-500"
            >
              0
            </button>

            <button
              onClick={handleDecimal}
              className="px-4 py-2 rounded-xl bg-gray-500"
            >
              .
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleOperator("/")}
            className="px-4 py-2 rounded-xl bg-red-300 text-black"
          >
            /
          </button>

          <button
            onClick={() => handleOperator("*")}
            className="px-4 py-2 rounded-xl bg-red-300 text-black"
          >
            X
          </button>
          <button
            onClick={() => handleOperator("-")}
            className="px-4 py-2 rounded-xl bg-red-300 text-black"
          >
            -
          </button>
          <button
            onClick={() => handleOperator("+")}
            className="px-4 py-2 rounded-xl bg-red-300 text-black"
          >
            +
          </button>
          <button
            onClick={() => handleOperator("**")}
            className="px-4 py-2 rounded-xl bg-red-300 text-black"
          >
            **
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
