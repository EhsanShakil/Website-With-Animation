import React from "react";
import "../../App.css";
import AOS from "aos";
AOS.init();

const teamleader = require("./pictures/teamleader.png");
const webdeveloper = require("./pictures/webdeveloper.png");
const appdeveloper = require("./pictures/appdeveloper.png");

function Team() {
  return (
    <div className="Screens" id="team">
      <div className="heading">
        <h1
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
        >
          Our Team
        </h1>
      </div>
      <div className="team">
        <div
          className="teamcard"
          data-aos="flip-up"
          data-aos-delay="300"
          data-aos-once="false"
        >
          <img className="teamimage" src={teamleader} alt="team leader" />
          <h3>Name</h3>
          <h2>Team Leader</h2>
        </div>
        <div
          className="teamcard"
          data-aos="flip-up"
          data-aos-delay="500"
          data-aos-once="false"
        >
          <img className="teamimage" src={webdeveloper} alt="web developer" />
          <h3>Name</h3>
          <h2>Web Developer</h2>
        </div>
        <div
          className="teamcard"
          data-aos="flip-up"
          data-aos-delay="700"
          data-aos-once="false"
        >
          <img className="teamimage" src={appdeveloper} alt="app developer" />
          <h3>Name</h3>
          <h2>App Developer</h2>
        </div>
      </div>
    </div>
  );
}

export default Team;
