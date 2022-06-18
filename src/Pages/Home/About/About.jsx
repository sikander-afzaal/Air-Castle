import React from "react";
import AboutBox from "../../../Components/AboutBox/AboutBox";
import "./About.css";
import img1 from "../../../Assets/about1.png";
import img2 from "../../../Assets/temp.png";
function About() {
  return (
    <div className="about">
      <AboutBox
        desc={`Since the Internet (Web1) started, humanity has gained enormous access
          to knowledge. We can learn and research using the internet. Social
          media (Web2) created a new level; we started writing, reading, and
          sharing. We saw what our friends and family were doing and how our
          idols lived and made their dreams happen. Our community has grown, and
          we can communicate with it daily.`}
        desc2={`This access to information and communities comes at a price. All
          information is captured, stored, and traded by governments or tech
          companies, becoming more powerful than governments. In the unfair web2
          space, creators don't receive the earnings. Web3 (ownership) is
          changing that. It's the start of a digital revolution. We will own and
          have control of data, participation and community again.`}
        img={img1}
        head={"The start of a digital revolution"}
        sub={`why we do it`}
      />
      <AboutBox
        order
        desc={`We are bridging the gap between web 2 and Web3 by co-creation. The Aircastle team is a collective of the best Web3 and entertainment experts that have come together to facilitate sovereign communities and unlock new business models. We provide community-driven technology solutions with low barrier accessibility, high standards and inclusivity. Aircastle is becoming the hallmark in the industry by delivering high-quality tech and the best experiences (UX), services (open source) and education. `}
        img={img2}
        head={
          "Aircastle makes it possible for brands to build strong communities and peer-to-peer economies on the internet of tomorrow"
        }
        sub={`HOW WE DO IT`}
      />
    </div>
  );
}

export default About;
