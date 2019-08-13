import React from "react";
import Header from "./Header.js";
import axios from "axios";

import image from "../assets/Images/Upload-video-preview.jpg";

const API = `http://localhost:8080/videos`;

class Upload extends React.Component {
  state = {
    title: " ",
    description: " "
  };

  postNewVideo = () => {
    axios
      .post(API, {
        title: this.state.title,
        description: this.state.description
      })
      .then(response => {
        console.log(response);
      });
  };

  onSubmit = event => {
    event.preventDefault();
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="containerr">
        <h1 className="containerr-title">Upload Video</h1>
        <h5 className="containerr-label">VIDEO THUMBNAIL</h5>
        <img src={image} className="containerr-thumbnail" />

        <form className="form" onSubmit={this.onSubmit}>
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
              <button
                className="containerr-form__publish"
                onClick={this.postNewVideo}
              >
                PUBLISH
              </button>
              <p className="containerr-form__cancel">CANCEL</p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Upload;
