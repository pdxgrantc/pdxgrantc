import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import AboutThisSite from "./Pages/AboutThisSite/AboutThisSite";
import Code from "./Pages/Code/Code";
import WebApps from "./Pages/WebApps/WebApps";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/About-This-Site" element={<AboutThisSite />} />
        <Route path="/Code" element={<Code />} />
        <Route path="/WebApps" element={<WebApps />} />
      </Switch>
    </Router>
  )
}

export default App;
