import React from "react";
import Hero from "../../components/Hero";
import Service from "../../components/Service";
import MySkills from "../../components/MySkills";
import Portfolio from "../../components/Portfolio";
import Education from "../../components/Education";
import About from "../../components/About";
import Contact from "../../components/Contact";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Service></Service>
      <MySkills></MySkills>
      <Education></Education>
      <Portfolio></Portfolio>
      <div className="bg-[#081b29] border-[#112e42] border-b-[2px]">
        <div className="max-w-7xl mx-auto py-10 text-white ">
          <h2>Contact Information</h2>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
};

export default Home;
