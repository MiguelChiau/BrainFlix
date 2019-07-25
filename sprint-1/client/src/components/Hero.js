import React from "react";
import Background from "../assets/Images/video-list-0.jpg";
// import Fullscreen from "../assets/Icons/PNG/Icon-fullscreen.png";
// import Volume from "../assets/Icons/PNG/";

function Hero() {
  return (
    <div className="hero-background">
      <video controls poster={Background} />
    </div>
  );
}

export default Hero;
