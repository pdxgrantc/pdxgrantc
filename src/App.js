import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import AboutThisSite from "./Pages/AboutThisSite/AboutThisSite";
import Apps from "./Pages/Apps/Apps";
import ToDoHomePage from "./Pages/Apps/LocalPages/ToDo/ToDoHomePage/ToDoHomePage";
import Code from "./Pages/Code/Code";
import NewItem from "./Pages/Apps/LocalPages/ToDo/NewItem/NewItem";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/About-This-Site" element={<AboutThisSite />} />
        <Route path="/Apps" element={<Apps />} />
        <Route path="/Apps/ToDo" element={<ToDoHomePage />} />
        <Route path="/Code" element={<Code />} />
        <Route path="/ToDo/New-Item" element={<NewItem />} />
      </Switch>
    </Router>
  )
}

export default App;
