import React from "react";
import { Link } from "react-router-dom";

const LatestCourses = () => {
  return (
    <div className="px-10 lg:px-20 py-10">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-2xl font-bold" data-aos="fade-right">
          Latest Courses
        </h3>

        <span data-aos="fade-left">
          <Link to="/courses" className="text-blue-500 hover:underline">
            View All
          </Link>
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div
          className="border p-5 rounded-lg shadow hover:shadow-lg transition duration-300 bg-blue-50"
          data-aos="zoom-in"
        >
          <img src="" alt="" />
          <h3 className="text-lg font-semibold">Course Title</h3>
          <p className="text-gray-600">Course Description</p>
          <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
            <span>Rating</span>
            <span>Price</span>
          </div>
        </div>
        <div
          className="border p-5 rounded-lg shadow hover:shadow-lg transition duration-300 bg-blue-50"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img src="" alt="" />
          <h3 className="text-lg font-semibold">Course Title</h3>
          <p className="text-gray-600">Course Description</p>
          <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
            <span>Rating</span>
            <span>Price</span>
          </div>
        </div>
        <div
          className="border p-5 rounded-lg shadow hover:shadow-lg transition duration-300 bg-blue-50"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <img src="" alt="" />
          <h3 className="text-lg font-semibold">Course Title</h3>
          <p className="text-gray-600">Course Description</p>
          <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
            <span>Rating</span>
            <span>Price</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCourses;
