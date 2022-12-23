import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { Firestore } from "firebase/firestore";
import 'firebase/auth';

import Home from "./Pages/Home/Home";
import AboutThisSite from "./Pages/AboutThisSite/AboutThisSite";
import Apps from "./Pages/Apps/Apps";
import ToDoHomePage from "./Pages/Apps/LocalPages/ToDo/ToDoHomePage/ToDoHomePage";
import Code from "./Pages/Code/Code";
import NewItem from "./Pages/Apps/LocalPages/ToDo/NewItem/NewItem";
import ShoppingList from "./Pages/Apps/LocalPages/ShoppingList/ShoppingList";
import Test from "./Pages/Test/Test";

// Hooks
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyBcmstvVlHS4d5YN7E37KWsN-h4imrklhw",
  authDomain: "pdxgrantc-f9aa3.firebaseapp.com",
  projectId: "pdxgrantc",
  storageBucket: "pdxgrantc.appspot.com",
  messagingSenderId: "215927096815",
  appId: "1:215927096815:web:cb6aa1dc52d79fac5ce21a"
})

const auth = firebase.auth()
const firestore = Firestore.firestore()


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/About-This-Site" element={<AboutThisSite />} />
        <Route path="/Apps" element={<Apps />} />
        <Route path="/Apps/ToDo" element={<ToDoHomePage />} />
        <Route path="/Apps/Shopping-List" element={<ShoppingList />} />
        <Route path="/Code" element={<Code />} />
        <Route path="/Shopping-List" element={<ShoppingList />} />
        <Route path="/ToDo/New-Item" element={<NewItem />} />
        <Route path="/Test" element={<Test />} />
      </Switch>
    </Router>
  )
}

export default App;
