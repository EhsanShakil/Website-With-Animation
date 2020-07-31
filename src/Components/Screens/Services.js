import React from "react";
import "../../App.css";
import useWebAnimations, { bounceInRight } from "@wellyshen/use-web-animations";

const webdevelopment = require("./pictures/web-development.png");
const appdevelopment = require("./pictures/3.png");
const softwaredevelopment = require("./pictures/4.png");

function Services() {
  const { ref: r1 } = useWebAnimations({ ...bounceInRight });
  return (
    <div className="Screens " id="services">
      <div className="heading">
        <h1 ref={r1}>Our Services</h1>
      </div>
      <div className="services-cards">
        <div className="service-card">
          <img
            className="services-image"
            src={webdevelopment}
            alt="web development"
          />
          <h2 className="services-subheading">Web Development</h2>
          <p className="services-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="service-card">
          <img
            className="services-image"
            src={appdevelopment}
            alt="app development"
          />
          <h2 className="services-subheading">App Development</h2>
          <p className="services-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="service-card">
          <img
            className="services-image"
            src={softwaredevelopment}
            alt="software development"
          />
          <h2 className="services-subheading">Software Development</h2>
          <p className="services-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
