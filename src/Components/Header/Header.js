import React from "react";
import "../../App.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <ul className="nav">
          <li className="logo">
            <a href="#home">LOGO</a>
          </li>
        </ul>
      </div>
      <label htmlFor="toggle" className="material-icons">
        menu
      </label>
      <input type="checkbox" id="toggle" />
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
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
