import React from "react";
import "../../App.css";
import useWebAnimations, { bounceInLeft } from "@wellyshen/use-web-animations";

const teamleader = require("./pictures/teamleader.png");
const webdeveloper = require("./pictures/webdeveloper.png");
const appdeveloper = require("./pictures/appdeveloper.png");

function Team() {
  const { ref: r1 } = useWebAnimations({ ...bounceInLeft });
  return (
    <div className="Screens" id="team">
      <div className="heading">
        <h1 ref={r1}>Our Team</h1>
      </div>
      <div className="team">
        <div className="teamcard">
          <img className="teamimage" src={teamleader} alt="team leader" />
          <h3>Name</h3>
          <h2>Team Leader</h2>
        </div>
        <div className="teamcard">
          <img className="teamimage" src={webdeveloper} alt="web developer" />
          <h3>Name</h3>
          <h2>Web Developer</h2>
        </div>
        <div className="teamcard">
          <img className="teamimage" src={appdeveloper} alt="app developer" />
          <h3>Name</h3>
          <h2>App Developer</h2>
        </div>
      </div>
    </div>
  );
}

export default Team;
