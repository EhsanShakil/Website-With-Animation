import React from "react";
import "../../App.css";
import useWebAnimations from "@wellyshen/use-web-animations";
import AOS from "aos";
AOS.init();

const home = require("./pictures/home.png");

function Home() {
  return (
    <div className="Screens home" id="home">
      <div>
        <h1
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
        >
          Do You Need A Complete IT Solution?
        </h1>
        <p
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-once="true"
          className="paragrapgh"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p
          data-aos="fade-right"
          data-aos-delay="700"
          data-aos-once="true"
          className="paragrapgh"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div>
        <img src={home} alt="home" />
      </div>
    </div>
  );
}

export default Home;
