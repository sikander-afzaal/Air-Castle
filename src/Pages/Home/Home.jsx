import React from "react";
import About from "./About/About";
import Hero from "./Hero/Hero";
import "./Home.css";
import Work from "./Work/Work";
function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Work />
    </div>
  );
}

export default Home;
