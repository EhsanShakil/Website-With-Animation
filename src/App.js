import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Screens/Home";
import About from "./Components/Screens/About";
import Services from "./Components/Screens/Services";
import Team from "./Components/Screens/Team";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
