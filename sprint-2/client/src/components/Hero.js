import React from "react";
import Video from "../assets/Images/video-list-0.jpg";
import Play from "../assets/Icons/PNG/Icon-play.png";
import Fullscreen from "../assets/Icons/PNG/Icon-fullscreen.png";
import Volume from "../assets/Icons/PNG/Icon-volume.png";

const Hero = props => {
  const { hero } = props;

  return (
    <div className="hero-background">
      <video poster={Video} />

      <div className="controls">
        <button className="controls-play">
          <img src={Play} alt="" />
        </button>

        <button className="controls-range">
          <hr align="center" />
        </button>

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
};

/*function Hero() {
  return (
    <div className="hero-background">
      <video poster={Video} />

      <div className="controls">
        <button className="controls-play">
          <img src={Play} alt="" />
        </button>

        <button className="controls-range">
          <hr align="center" />
        </button>

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
}*/

export default Hero;
