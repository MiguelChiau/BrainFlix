import React from "react";
import Background from "../assets/Images/video-list-0.jpg";
// import Fullscreen from "../assets/Icons/PNG/Icon-fullscreen.png";
// import Volume from "../assets/Icons/PNG/Icon-volume.png";
// import Play from "../assets/Icons/PNG/Icon-play.png";

function Hero() {
  return (
    <div className="hero-background">
      <video poster={Background} />
    </div>
  );
}

export default Hero;
