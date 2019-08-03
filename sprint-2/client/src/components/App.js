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
        <Header />

        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/upload" component={Upload} />
          <Route
            path="/videos/:id"
            component={MainBody}
            // render={props => {
            //   console.log(props);
            //   // MainBody(props);
            // }}
          />
        </Switch>

        {/* <Hero /> */}
        {/* <MainBody /> */}
      </div>
    );
  }
}

export default App;
