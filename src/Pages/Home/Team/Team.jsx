import React from "react";
import TeamBox from "../../../Components/TeamBox/TeamBox";
import "./Team.css";
import temp from "../../../Assets/TeamImgs/team-temp.svg";
function Team() {
  const teamData = [
    {
      img: temp,
      url: "#",
      name: "John Johnson",
      expertise: "AREA OF EXPERTISE",
    },
    {
      img: temp,
      url: "#",
      name: "John Johnson",
      expertise: "AREA OF EXPERTISE",
    },
    {
      img: temp,
      url: "#",
      name: "John Johnson",
      expertise: "AREA OF EXPERTISE",
    },
    {
      img: temp,
      url: "#",
      name: "John Johnson",
      expertise: "AREA OF EXPERTISE",
    },
    {
      img: temp,
      url: "#",
      name: "John Johnson",
      expertise: "AREA OF EXPERTISE",
    },
    {
      img: temp,
      url: "#",
      name: "John Johnson",
      expertise: "AREA OF EXPERTISE",
    },
    {
      img: temp,
      url: "#",
      name: "John Johnson",
      expertise: "AREA OF EXPERTISE",
    },
    {
      img: temp,
      url: "#",
      name: "John Johnson",
      expertise: "AREA OF EXPERTISE",
    },
    {
      img: temp,
      url: "#",
      name: "John Johnson",
      expertise: "AREA OF EXPERTISE",
    },
    {
      img: temp,
      url: "#",
      name: "John Johnson",
      expertise: "AREA OF EXPERTISE",
    },
    {
      img: temp,
      url: "#",
      name: "John Johnson",
      expertise: "AREA OF EXPERTISE",
    },
    {
      img: temp,
      url: "#",
      name: "John Johnson",
      expertise: "AREA OF EXPERTISE",
    },
  ];
  return (
    <div className="team">
      <h2 className="top-sub gest">the team</h2>

      <div className="bottom-team">
        <div className="left-team">
          <p className="main-head">
            Our team consists of proven experts that have been in the Web3 space
            for over 5 years, and in the entertainment industry for over 20
            years , including topnotch strategists, blockchain engineers,
            designers, creatives, marketers and community builders.
            Additionally, we have selected partners and an advisory containing
            industry leaders.
          </p>
        </div>
        <div className="right-team">
          {teamData.map((item, key) => {
            return (
              <TeamBox
                key={"team" + key}
                img={item.img}
                url={item.url}
                name={item.name}
                expertise={item.expertise}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;
