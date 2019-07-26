import React from "react";
import Views from "../assets/Icons/SVG/Icon-views.svg";
import Likes from "../assets/Icons/SVG/Icon-likes.svg";

function Title() {
  return (
    <div className="container-all">
      <h1>BMX Rampage: 2018 Highlights</h1>

      <div className="container-authorAndIcons">
        <div className="container-author">
          <h2>By Red Cow</h2>
          <h5>12/18/2018</h5>
        </div>

        <div className="container-icons">
          <div className="container-icons__views">
            <img src={Views} alt="" />
            <h5>1,001,023</h5>
          </div>

          <div className="container-icons__likes">
            <img src={Likes} alt="" />
            <h5>110,985</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
