import React from "react";
import assets from "../../assets/assets.js";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#252641] px-20 py-10">
      <div className="flex justify-center items-center gap-10">
        <img src={assets.Logo} alt="Logo" className="w-22" />

        <div className="border-l-2 border-gray-500 pl-10 text-white font-semibold">
          <h5>
            Virtual Classes <br /> for Zoom
          </h5>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center mt-6">
        <h5 className="text-gray-500 font-semibold">
          Subscribe to get our Newsletter
        </h5>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Your Email"
            className="py-2 px-4 rounded-full border-gray-500 border-2 outline-none placeholder:text-gray-500 text-white"
          />
          <button className="px-6 py-2 rounded-full bg-[#49BBBD] text-white cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>

      <p className="text-gray-500 text-center mt-6">
        Copyright &copy; {year} All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
