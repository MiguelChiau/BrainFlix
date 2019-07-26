import React from "react";
import Background from "../assets/Images/video-list-0.jpg";
import Play from "../assets/Icons/PNG/Icon-play.png";
import Fullscreen from "../assets/Icons/PNG/Icon-fullscreen.png";
import Volume from "../assets/Icons/PNG/Icon-volume.png";

function Hero() {
  return (
    <div className="hero-background">
      <video poster={Background} />

      <div className="controls">
        <button className="controls-play">
          <img src={Play} alt="" />
        </button>

        <div className="controls-range" />

        <div className="controls-buttons">
          <button>
            <img src={Fullscreen} alt="" />
          </button>

          <button>
            <img src={Volume} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
