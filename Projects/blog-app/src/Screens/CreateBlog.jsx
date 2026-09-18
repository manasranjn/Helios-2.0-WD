import React from "react";

const CreateBlog = () => {
  return (
    <div className="h-screen bg-[#F2EFE7] flex justify-center items-center">
      <form className="max-w-[500px] w-[90%] bg-[#66A3BF] flex flex-col gap-4 p-4 rounded-md">
        <h1 className="text-2xl font-semibold text-center text-white">
          Create Blog
        </h1>
        <input
          type="text"
          placeholder="Enter Blog Title"
          className="p-2 rounded bg-white border-none outline-none"
        />
        <textarea
          rows={10}
          placeholder="Enter Blog Content"
          className="p-2 rounded bg-white border-none outline-none"
        ></textarea>
        <button className="p-2 rounded bg-green-500 text-white font-semibold text-lg cursor-pointer border-none outline-none">
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
