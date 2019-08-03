import React, { Component } from "react";
import Header from "./Header.js";
// import Hero from "./Hero.js";
import Upload from "./Upload.js";

import MainBody from "./MainBody.js";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import "../styles/app.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Redirect from="/" exact to="/videos/1af0jruup5gu" />
          <Route path="/upload" component={Upload} />

          <Route path="/videos/:id" component={MainBody} />
        </Switch>

        {/* <Hero /> */}
        {/* <MainBody /> */}
      </div>
    );
  }
}

export default App;
