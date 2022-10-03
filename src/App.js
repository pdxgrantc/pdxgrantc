import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import AboutThisSite from "./Pages/AboutThisSite/AboutThisSite";
import Code from "./Pages/Code/Code";
import ToDoHomePage from "./Pages/ToDo/ToDoHomePage/ToDoHomePage"
import NewItem from "./Pages/ToDo/NewItem/NewItem"
import ShoppingList from "./Pages/ShoppingList/ShoppingList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/About-This-Site" element={<AboutThisSite />} />
        <Route path="/Code" element={<Code />} />
        <Route path="/Shopping-List" element={<ShoppingList />} />
        <Route path="/ToDo" element={<ToDoHomePage />} />
        <Route path="/ToDo/New-Item" element={<NewItem />} />
      </Switch>
    </Router>
  )
}

export default App;
