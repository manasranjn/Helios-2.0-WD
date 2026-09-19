import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      setError("Please fill all the fields");
      return;
    }

    const post = {
      title,
      content,
    };

    axios
      .post("http://localhost:5000/posts", post)
      .then((res) => {
        // console.log(res);

        setTitle("");
        setContent("");

        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to create blog");
      });
  };

  return (
    <div className="h-screen bg-[#F2EFE7] flex justify-center items-center">
      <form className="max-w-125 w-[90%] bg-[#66A3BF] flex flex-col gap-4 p-4 rounded-md">
        <h1 className="text-2xl font-semibold text-center text-white">
          Create Blog
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
          className="p-2 rounded bg-green-500 text-white font-semibold text-lg cursor-pointer border-none outline-none"
          onClick={handleSubmit}
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
