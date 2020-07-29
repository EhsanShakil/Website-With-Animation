import React from "react";
import Header from "../Header/Header";
import Home from "../Screens/Home";
import Services from "../Screens/Services";
import About from "../Screens/About";
import Team from "../Screens/Team";
import Contact from "../Screens/Contact";
import Footer from "../Screens/Footer";

function Main() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
