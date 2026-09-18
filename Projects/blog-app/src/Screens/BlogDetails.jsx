import React from "react";

const BlogDetails = () => {
  return (
    <div className="h-screen bg-[#F2EFE7] flex justify-center items-center">
      <div className="max-w-[600px] w-[90%] bg-[#66A3BF] flex flex-col gap-4 p-4 rounded-md text-white">
        <h3 className="text-2xl font-semibold">Blog Title</h3>
        <p className="text-lg">Blog Content</p>
        <button className="p-2 rounded bg-blue-500 text-white font-semibold text-lg cursor-pointer border-none outline-none">
          Edit
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
