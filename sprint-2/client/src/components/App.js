import React, { Component } from "react";
import Header from "./Header.js";
import Hero from "./Hero.js";
import Upload from "./Upload.js";

import MainBody from "./MainBody.js";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import "../styles/app.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Header} />
        </Switch>
        <Switch>
          <Route path="/upload" component={Upload} />
        </Switch>
        <Hero />
        <MainBody />
      </div>
    );
  }
}

export default App;
