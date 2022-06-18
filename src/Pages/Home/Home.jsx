import React from "react";
import About from "./About/About";
import Hero from "./Hero/Hero";
import "./Home.css";
import Roadmap from "./Roadmap/Roadmap";
import Solution from "./Solution/Solution";
import Work from "./Work/Work";
function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Work />
      <Roadmap />
      <Solution />
    </div>
  );
}

export default Home;
