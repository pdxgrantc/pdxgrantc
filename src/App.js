import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import AboutThisSite from "./Pages/AboutThisSite/AboutThisSite";
import Apps from "./Pages/Apps/Apps";
import Code from "./Pages/Code/Code";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/About-This-Site" element={<AboutThisSite />} />
        <Route path="/Apps" element={<Apps />} />
        <Route path="/Code" element={<Code />} />
      </Switch>
    </Router>
  )
}

export default App;
