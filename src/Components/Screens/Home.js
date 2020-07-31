import React from "react";
import "../../App.css";
import useWebAnimations, { bounceInLeft } from "@wellyshen/use-web-animations";

const home = require("./pictures/home.png");

function Home() {
  const { ref: r1 } = useWebAnimations({ ...bounceInLeft });
  const { ref: r2 } = useWebAnimations({ ...bounceInLeft });
  const { ref: r3 } = useWebAnimations({ ...bounceInLeft });

  return (
    <div className="Screens home" id="home">
      <div>
        <h1 ref={r1}>Do You Need A Complete IT Solution?</h1>
        <p ref={r2} className="paragrapgh">
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
        <p ref={r3} className="paragrapgh">
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
