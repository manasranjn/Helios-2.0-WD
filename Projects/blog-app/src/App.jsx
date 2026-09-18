import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Screens/Home";
import CreateBlog from "./Screens/CreateBlog";
import EditBlog from "./Screens/EditBlog";
import BlogDetails from "./Screens/BlogDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        j
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/edit" element={<EditBlog />} />
        <Route path="/blog" element={<BlogDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
