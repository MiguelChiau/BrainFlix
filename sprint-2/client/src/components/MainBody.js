import React, { Component } from "react";
import Views from "../assets/Icons/SVG/Icon-views.svg";
import Likes from "../assets/Icons/SVG/Icon-likes.svg";
import Videos from "./Videos.js";
import Comments from "./Comments";
// import AddComment from "./AddComment";
import axios from "axios";

import Avatar from "../assets/Images/Mohan-muruge.jpg";

// import DescriptionText from "./DescriptionText.js";

export default class MainBody extends Component {
  state = {
    mainVideo: {
      comments: []
    },
    videos: []
  };

  addComment = comment => {
    console.log(comment);

    const newComment = {
      id: "4",
      name: "Miguel",
      timestamp: "date",
      comment: comment
    };
    let comments = this.state.comments.concat(newComment);
    this.setState({
      comments: comments
    });

    // let date =
    //   date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    // this.setState({
    //   date: date
    // });
  };

  // componentDidMount() {

  componentDidMount() {
    //API request for the main video details
    const myKey = "d9ee6782-fc1c-4908-9ee6-d878e091f619";
    const id = "1af0jruup5gu";
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=${myKey}`
      )
      .then(response => {
        console.log("test", response.data);
        this.setState({
          mainVideo: response.data
        });
      });

    // API GET request for the next videos section
    axios
      .get(`https://project-2-api.herokuapp.com/videos?api_key=${myKey}`)
      .then(response => {
        this.setState({
          videos: response.data
        });
      });
  }

  render() {
    return (
      <div className="container-allAndAside ">
        <div className="container-all">
          <div className="container">
            <div>
              <h1>{this.state.mainVideo.title}</h1>
            </div>

            <div className="container-authorAndIcons">
              <div className="container-author">
                <h2>{this.state.mainVideo.channel}</h2>
                <h5>{this.state.mainVideo.timestamp}</h5>
              </div>

              <div className="container-icons">
                <div className="container-icons__views">
                  <img src={Views} alt="" />
                  <h5>{this.state.mainVideo.views}</h5>
                </div>

                <div className="container-icons__likes">
                  <img src={Likes} alt="" />
                  <h5>{this.state.mainVideo.likes}</h5>
                </div>
              </div>
            </div>
          </div>
          <p className="description-paragraph">
            {this.state.mainVideo.description}
          </p>
          {/* <AddComment addComment={this.addComment} /> */}
          <Comments comments={this.state.mainVideo.comments} />
        </div>
        <div>
          <h2 className="videosTitle">NEXT VIDEO</h2>
          <Videos videos={this.state.videos} />
        </div>
      </div>
    );
  }
}
