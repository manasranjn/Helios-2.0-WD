import React from "react";
import food from "../../assets/food.jpg";

const Hero = () => {
  return (
    <div className="w-full h-[80vh] relative">
      <img src={food} alt="food" className="h-full w-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 "></div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to FoodHub</h1>
        <p className="text-2xl font-semibold mb-8">
          Discover the best food in Bhubaneswar
        </p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 cursor-pointer">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
