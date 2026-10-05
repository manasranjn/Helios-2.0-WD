import React from "react";
import Hero from "../Components/HomeComponents/Hero";
import LatestCourses from "../Components/HomeComponents/LatestCourses";
import LatestBlogs from "../Components/HomeComponents/LatestBlogs";
import OurSuccess from "../Components/HomeComponents/OurSuccess";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <LatestCourses />
      <OurSuccess />
      <LatestBlogs />
    </div>
  );
};

export default Home;
