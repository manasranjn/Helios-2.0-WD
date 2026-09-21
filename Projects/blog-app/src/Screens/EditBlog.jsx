import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditBlog = () => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [error, setError] = React.useState("");

  const navigate = useNavigate();
  const id = useParams().id;
  // console.log(id);

  const getPost = () => {
    axios
      .get(`http://localhost:5000/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch((err) => {
        console.log(err.message);
        setError("Failed to get blog");
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/posts/${id}`, { title, content })
      .then((res) => {
        // console.log(res);
        navigate(`/blog/${id}`);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to update blog");
      });
  };

  return (
    <div className="h-screen bg-[#F2EFE7] flex justify-center items-center">
      <form className="max-w-125 w-[90%] bg-[#66A3BF] flex flex-col gap-4 p-4 rounded-md">
        <h1 className="text-2xl font-semibold text-center text-white">
          Update Blog
        </h1>

        {error && <p className="text-red-700 text-center text-lg">{error}</p>}

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter Blog Title"
          className="p-2 rounded bg-white border-none outline-none"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          placeholder="Enter Blog Content"
          className="p-2 rounded bg-white border-none outline-none"
        ></textarea>
        <button
          className="p-2 rounded bg-blue-500 text-white font-semibold text-lg cursor-pointer border-none outline-none"
          onClick={handleEdit}
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
