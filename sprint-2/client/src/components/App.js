import React, { Component } from "react";
import Header from "./Header.js";
import Hero from "./Hero.js";
import MainBody from "./MainBody.js";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import "../styles/app.css";

// const myKey = `d9ee6782-fc1c-4908-9ee6-d878e091f619`;

// const API = `https://project-2-api.herokuapp.com`;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Header} />
        </Switch>

        <Hero />
        <MainBody />
      </div>
    );
  }
}

export default App;
