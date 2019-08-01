import React from "react";
import Header from "./Header.js";
// import { Link } from "react-router-dom";

import image from "../assets/Images/Upload-video-preview.jpg";

function Upload() {
  return (
    <div className="container">
      <Header />

      <h1 className="container-title">Upload Video</h1>
      <h5 className="container-label">VIDEO THUMBNAIL</h5>
      <img src={image} className="container-thumbnail" />

      <form className="form">
        <div>TITLE YOU VIDEO</div>

        <input
          type="text"
          name="videotitle"
          placeholder="Add a title to your video"
        />
        <div>ADD A VIDEO DESCRIPTION</div>

        <input
          type="text"
          name="videodescription"
          placeholder="Add a descriptions of your video"
        />
        <input type="submit" value="PUBLISH" />
      </form>
    </div>
  );
}

export default Upload;
