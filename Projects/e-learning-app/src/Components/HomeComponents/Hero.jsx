import React from "react";
import assets from "../../assets/assets.js";

const Hero = () => {
  return (
    <div className="flex px-20 py-10 bg-[#49BBBD] ">
      <div className="flex flex-col gap-5 justify-center w-1/3">
        <h3 className="text-4xl font-bold">
          {" "}
          <span className="text-orange-500">Studying</span> Online is now much
          easier
        </h3>
        <p>
          TOTC is an interesting platform that will teach you in more an
          interactive way
        </p>

        <div className="flex gap-10">
          <button className="px-6 py-2 rounded-full bg-white/30 text-white cursor-pointer">
            Join Now{" "}
          </button>

          <button className="px-6 py-2 rounded-full bg-white cursor-pointer">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-2/3 flex justify-end">
        <img src={assets.Hero} alt="" className="w-[60%]" />
      </div>
    </div>
  );
};

export default Hero;
