import React from "react";
import "../../App.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">LOGO</h1>
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle" className="material-icons">
        menu
      </label>
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
