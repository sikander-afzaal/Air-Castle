import React from "react";
import "./Hero.css";
import vid from "../../../Assets/hero-vid.webm";
import vid2 from "../../../Assets/hero-mobile-vid.webm";
function Hero() {
  return (
    <div className="hero">
      <video
        className="desktop"
        src={vid}
        autoPlay
        muted
        loop
        controls={false}
      />
      <video
        className="mobile"
        src={vid2}
        autoPlay
        muted
        loop
        controls={false}
      />
      <div className="hero-text-div">
        <h1>
          Aircastle empowers premium brands to build high-value Web3 communities
        </h1>
        <p>
          Aircastle is a Social-first Web3 Community. We collaborate with
          high-impact brands and individuals to co-create stronger relationships
          with their fans and customers by building Web3 solutions
        </p>
      </div>
    </div>
  );
}

export default Hero;
