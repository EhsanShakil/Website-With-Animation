import React from "react";
import "../../App.css";

const Header = () => {
  return (
    <div className="navbar">
      <ul className="nav">
        <li>
          <a href="#home">Home</a>
        </li>
      </ul>
      <ul className="nav">
        <li>
          <a href="#services">Services</a>
        </li>
      </ul>
      <ul className="nav">
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
      <ul className="nav">
        <li>
          <a href="#team">Team</a>
        </li>
      </ul>
      <ul className="nav">
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
