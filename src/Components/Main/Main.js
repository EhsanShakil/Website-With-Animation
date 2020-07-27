import React from "react";
import Header from "../Header/Header";
import Home from "../Screens/Home";
import Services from "../Screens/Services";
import About from "../Screens/About";
import Team from "../Screens/Team";
import Contact from "../Screens/Contact";

function Main() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <About />
      <Team />
      <Contact />
    </div>
  );
}

export default Main;
