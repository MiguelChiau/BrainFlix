import React from "react";
import Header from "./Header.js";
import Hero from "./Hero.js";
import MainBody from "./MainBody.js";

import "../styles/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainBody />
    </div>
  );
}

export default App;
