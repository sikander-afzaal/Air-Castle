import React from "react";
import "./AboutBox.css";
function AboutBox({ img, order, sub, desc, desc2, head }) {
  return (
    <div className="about-box">
      <div className={`left-about ${order ? "order-about" : ""}`}>
        <img src={img} alt="" />
      </div>
      <div className="right-about">
        <h2 className="gest">{sub}</h2>
        <h1>{head}</h1>
        <p>{desc}</p>
        <p>{desc2}</p>
      </div>
    </div>
  );
}

export default AboutBox;
