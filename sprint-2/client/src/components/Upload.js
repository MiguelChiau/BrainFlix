import React from "react";
import Header from "./Header.js";
// import { Link } from "react-router-dom";

import image from "../assets/Images/Upload-video-preview.jpg";

function Upload() {
  return (
    <div className="containerr">
      {/* <Header /> */}

      <h1 className="containerr-title">Upload Video</h1>
      <h5 className="containerr-label">VIDEO THUMBNAIL</h5>
      <img src={image} className="containerr-thumbnail" />

      <form className="form">
        <div className="containerr-form">
          <p className="containerr-form__addTitle">TITLE YOU VIDEO</p>
          <input
            type="text"
            name="videotitle"
            placeholder="Add a title to your video"
            className="containerr-form__add"
          />
          <p className="containerr-form__addDescription">
            ADD A VIDEO DESCRIPTION
          </p>

          <textarea
            placeholder="Add a descriptions of your video"
            className="containerr-form__textarea"
          />

          <div className="containerr-form__inputs">
            <button className="containerr-form__publish">PUBLISH</button>
            <p className="containerr-form__cancel">CANCEL</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Upload;
