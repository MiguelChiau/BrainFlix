import React from "react";
import Header from "./Header.js";
import axios from "axios";

import image from "../assets/Images/Upload-video-preview.jpg";

//This is to collect the information that the user will type
function Upload() {
  const uploadVideo = event => {
    event.preventDefault();
    const form = event.target;
    const name = event.target.videoDescription.value;
    const title = event.target.videoTitle.value;

    //Now using axios to post this info
    // const myKey = "d9ee6782-fc1c-4908-9ee6-d878e091f619";
    // axios.post(`https://project-2-api.herokuapp.com/videos/?api_key=${myKey}`)
    //   .then;
  };

  return (
    <div className="containerr">
      <h1 className="containerr-title">Upload Video</h1>
      <h5 className="containerr-label">VIDEO THUMBNAIL</h5>
      <img src={image} className="containerr-thumbnail" />

      <form className="form" onSubmit={uploadVideo}>
        <div className="containerr-form">
          <p className="containerr-form__addTitle">TITLE YOUR VIDEO</p>
          <input
            type="text"
            name="videoTitle"
            placeholder="Add a title to your video"
            className="containerr-form__add"
          />
          <p className="containerr-form__addDescription">
            ADD A VIDEO DESCRIPTION
          </p>

          <textarea
            placeholder="Add a descriptions of your video"
            className="containerr-form__textarea"
            name="videoDescription"
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
