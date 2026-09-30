import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import BlogDetails from "./Pages/BlogDetails";
import Courses from "./Pages/Courses";
import CourseDetails from "./Pages/CourseDetails";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
