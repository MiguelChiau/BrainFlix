import React from "react";
import Header from "./Header.js";
// import { Link } from "react-router-dom";

import image from "../assets/Images/Upload-video-preview.jpg";

function Upload() {
  return (
    <div className="container">
      {/* <Header /> */}

      <h1 className="container-title">Upload Video</h1>
      <h5 className="container-label">VIDEO THUMBNAIL</h5>
      <img src={image} className="container-thumbnail" />

      <form className="form">
        <div className="container-form">
          <p className="container-form__addTitle">TITLE YOU VIDEO</p>
          <input
            type="text"
            name="videotitle"
            placeholder="Add a title to your video"
            className="container-form__add"
          />
          <p className="container-form__addDescription">
            ADD A VIDEO DESCRIPTION
          </p>

          <textarea placeholder="Add a descriptions of your video" />

          <div className="container-form__inputs">
            <button className="container-form__publish">PUBLISH</button>
            <p className="container-form__cancel">CANCEL</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Upload;
