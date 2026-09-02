import React from "react";
import { FaCartPlus } from "react-icons/fa";

const NavLinks = () => {
  return (
    <div className="px-10 lg:px-20 flex justify-between items-center bg-white py-3 shadow-md">
      <h2 className="text-3xl font-bold text-orange-500">FoodHub</h2>

      <ul className="flex gap-4">
        <li className="hover:text-orange-500 cursor-pointer">Home</li>
        <li className="hover:text-orange-500 cursor-pointer">About</li>
        <li className="hover:text-orange-500 cursor-pointer">Contact</li>
      </ul>

      <div>
        <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 cursor-pointer">
          <FaCartPlus />
        </button>
      </div>
    </div>
  );
};

export default NavLinks;
