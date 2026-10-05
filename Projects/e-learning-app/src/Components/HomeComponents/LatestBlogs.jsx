import React from "react";
import { Link } from "react-router-dom";

const LatestBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Blog 1 description",
      author: "John Doe",
      date: "2021-01-01",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Blog 2 description",
      author: "John Doe",
      date: "2021-01-01",
    },
    {
      id: 3,
      title: "Blog 3",
      description: "Blog 3 description",
      author: "John Doe",
      date: "2021-01-01",
    },
  ];

  return (
    <div className="px-10 lg:px-20 py-10">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-2xl font-bold" data-aos="fade-right">
          Latest Articles
        </h3>

        <span data-aos="fade-left">
          <Link to="/blogs  " className="text-blue-500 hover:underline">
            View All
          </Link>
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className="border p-5 rounded-lg shadow hover:shadow-lg transition duration-300 bg-slate-50"
            {...(index === 0 && { "data-aos": "fade-right" })}
            {...(index === 1 && { "data-aos": "fade-up" })}
            {...(index === 2 && { "data-aos": "fade-left" })}
          >
            <img src="" alt="" />
            <h3 className="text-lg font-semibold">{blog.title}</h3>
            <p className="text-gray-600">{blog.description}</p>
            <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
              <span>{blog.author}</span>
              <span>{blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
