import React from "react";
import useWebAnimations, { bounceInLeft } from "@wellyshen/use-web-animations";
import AOS from "aos";
AOS.init();

const contactus = require("./pictures/contactus.png");

function Contact() {
  const { ref: r1 } = useWebAnimations({ ...bounceInLeft });
  return (
    <div className="Screens" id="contact">
      <div className="heading">
        <h1
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
        >
          Contact Us
        </h1>
      </div>
      <div className="contact">
        <div>
          <img className="contactimage" src={contactus} alt="contactus" />
        </div>
        <div>
          <form className="form">
            <input
              type="text"
              className="input"
              placeholder="Full Name"
              required
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
            />
            <input
              type="email"
              className="input"
              placeholder="Email"
              required
              data-aos="fade-left"
              data-aos-delay="700"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
            />
            <input
              type="phonenumber"
              className="input"
              placeholder="Phone Number"
              required
              data-aos="fade-left"
              data-aos-delay="800"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
            />
            <input
              type="textarea"
              className="inputmessage"
              placeholder="Message"
              required
              data-aos="fade-left"
              data-aos-delay="900"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
            />
            <button
              onClick={(e) => e.preventDefault()}
              className="button"
              data-aos="fade-left"
              data-aos-delay="1000"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
