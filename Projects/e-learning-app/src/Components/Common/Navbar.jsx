import React from "react";
import assests from "../../assets/assets.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-20 py-2 bg-[#49BBBD] sticky top-0 z-10 shadow-md">
      <img src={assests.Logo} alt="logo" className="w-16" />

      <div className="flex gap-8">
        <ul className="flex gap-8 text-white items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
        </ul>

        <div className="flex gap-8">
          <Link
            to="/login"
            className="px-6 py-2 rounded-full bg-white cursor-pointer"
          >
            Login
          </Link>
          <Link
            to="/login"
            className="px-6 py-2 rounded-full bg-white/30 text-white cursor-pointer"
          >
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
