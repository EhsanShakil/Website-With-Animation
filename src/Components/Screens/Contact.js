import React from "react";

const contactus = require("./pictures/contactus.png");

function Contact() {
  return (
    <div className="Screens" id="contact">
      <div className="heading">
        <h1>Contact Us</h1>
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
            />
            <input
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <input
              type="phonenumber"
              className="input"
              placeholder="Phone Number"
              required
            />
            <input
              type="textarea"
              className="inputmessage"
              placeholder="Message"
              required
            />
            <button onClick={(e) => e.preventDefault()} className="button">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
