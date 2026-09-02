import React from "react";
import foodItems from "../../assets/data";

const Category = () => {
  return (
    <div className="px-10 lg:px-20 py-6 md:py-10">
      <h1 className="text-3xl font-bold mb-4">Explore Categories</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
        {foodItems.map((food) => (
          <div className="p-4 rounded shadow-md h-44 cursor-pointer">
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-30 object-cover rounded-md"
            />
            <h3 className="text-center">{food.category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
