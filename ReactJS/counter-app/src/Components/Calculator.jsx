import React from "react";

const Calculator = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg">
      <h2 className="text-5xl text-right">0</h2>

      <div className=" text-xl flex gap-4">
        <div>
          <div className=" grid grid-cols-3 gap-4 mt-6">
            <button className="px-4 py-2 rounded-xl bg-red-300 cursor-pointer">
              AC
            </button>
            <button className="px-4 py-2 rounded-xl bg-red-300 cursor-pointer">
              =
            </button>
            <button className="px-4 py-2 rounded-xl bg-red-300 cursor-pointer">
              00
            </button>
          </div>

          <div className=" grid grid-cols-3 gap-4 mt-4">
            <button className="px-4 py-2 rounded-xl bg-gray-500 cursor-pointer">
              1
            </button>
            <button className="px-4 py-2 rounded-xl bg-gray-500 cursor-pointer">
              2
            </button>
            <button className="px-4 py-2 rounded-xl bg-gray-500 cursor-pointer">
              3
            </button>
            <button className="px-4 py-2 rounded-xl bg-gray-500 cursor-pointer">
              4
            </button>
            <button className="px-4 py-2 rounded-xl bg-gray-500 cursor-pointer">
              5
            </button>
            <button className="px-4 py-2 rounded-xl bg-gray-500 cursor-pointer">
              6
            </button>
            <button className="px-4 py-2 rounded-xl bg-gray-500 cursor-pointer">
              7
            </button>
            <button className="px-4 py-2 rounded-xl bg-gray-500 cursor-pointer">
              8
            </button>
            <button className="px-4 py-2 rounded-xl bg-gray-500 cursor-pointer">
              9
            </button>
            <button className="px-4 py-2 rounded-xl bg-gray-500 cursor-pointer">
              %
            </button>
            <button className="px-4 py-2 rounded-xl bg-gray-500 cursor-pointer">
              0
            </button>
            <button className="px-4 py-2 rounded-xl bg-gray-500 cursor-pointer">
              .
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <button className="px-4 py-2 rounded-xl bg-red-300 cursor-pointer">
            /
          </button>
          <button className="px-4 py-2 rounded-xl bg-red-300 cursor-pointer">
            X
          </button>
          <button className="px-4 py-2 rounded-xl bg-red-300 cursor-pointer">
            -
          </button>
          <button className="px-4 py-2 rounded-xl bg-red-300 cursor-pointer">
            +
          </button>
          <button className="px-4 py-2 rounded-xl bg-red-300 cursor-pointer">
            **
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
