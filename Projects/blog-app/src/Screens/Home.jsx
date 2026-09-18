import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#F2EFE7] px-20 py-10">
      <h2 className="text-3xl font-semibold">Explore Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        <div className="p-4 rounded-md bg-white shadow-lg ">
          <h3 className="text-2xl font-semibold">Title</h3>
          <p>Description</p>

          <div className="flex justify-between mt-4">
            <button
              className="px-5 py-2 rounded bg-blue-500 font-semibold cursor-pointer text-white"
              onClick={() => navigate("/blog")}
            >
              Read More
            </button>
            <button className="px-5 py-2 rounded bg-red-500 font-semibold cursor-pointer text-white">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
