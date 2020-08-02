import React from "react";
import "../../App.css";
import useWebAnimations from "@wellyshen/use-web-animations";
import AOS from "aos";
AOS.init();

const aboutus = require("./pictures/aboutussss.png");

function About() {
  return (
    <div className="Screens" id="about">
      <div className="heading">
        <h1
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
        >
          About Us
        </h1>
      </div>
      <div className="aboutus">
        <div>
          <img className="aboutus-image" src={aboutus} alt="about-us" />
        </div>
        <div className="paragrapgh">
          <p data-aos="fade-left" data-aos-delay="700" data-aos-once="false">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p data-aos="fade-left" data-aos-delay="800" data-aos-once="false">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p data-aos="fade-left" data-aos-delay="900" data-aos-once="false">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
