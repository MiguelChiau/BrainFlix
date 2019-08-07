import React, { Component } from "react";
import Views from "../assets/Icons/SVG/Icon-views.svg";
import Likes from "../assets/Icons/SVG/Icon-likes.svg";
import Videos from "./Videos.js";
import Comments from "./Comments";
import AddComment from "./AddComment";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Play from "../assets/Icons/PNG/Icon-play.png";
import Fullscreen from "../assets/Icons/PNG/Icon-fullscreen.png";
import Volume from "../assets/Icons/PNG/Icon-volume.png";

import Avatar from "../assets/Images/Mohan-muruge.jpg";

// This will convert the epoch timestamp into human readable date
const convertDate = date => {
  return new Date(date).toLocaleDateString();
};

export default class MainBody extends Component {
  state = {
    videosInfo: {
      comments: []
    },

    videos: [],

    default: " "
  };

  componentDidMount() {
    const myKey = "d9ee6782-fc1c-4908-9ee6-d878e091f619";
    axios
      .get(`https://project-2-api.herokuapp.com/videos/?api_key=${myKey}`)
      .then(response => {
        console.log("after first get", response.data);
        this.setState(
          {
            videos: response.data,
            default: response.data[0].id
          },
          () => {
            // API GET request for the next videos section
            console.log(this.state.default);
            axios
              .get(
                `https://project-2-api.herokuapp.com/videos/${
                  this.state.default
                }?api_key=${myKey}`
              )
              .then(response => {
                console.log("second get", response.data);
                this.setState({
                  videosInfo: response.data
                });
              })

              .catch(function(err) {});
          }
        );
      });
  }

  componentDidUpdate(prevProps) {
    const myKey = "d9ee6782-fc1c-4908-9ee6-d878e091f619";

    console.log("from did update ", this.props);
    if (this.props.match.params.id !== prevProps.match.params.id) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${
            this.props.match.params.id
          }?api_key=${myKey}`
        )
        .then(response => {
          this.setState({
            videosInfo: response.data
          });
        });
    }
  }

  render() {
    //This is to remove the current video from the videos list
    const videos = this.state.videos.filter(video => {
      return video.id !== this.props.match.params.id;
    });

    return (
      <div>
        <div className="hero-background">
          <video
            poster={this.state.videosInfo.image}
            className="hero-background__image"
          />

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

        <div className="container-allAndAside ">
          <div className="container-all">
            <div className="container">
              <div>
                <h1>{this.state.videosInfo.title}</h1>
              </div>

              <div className="container-authorAndIcons">
                <div className="container-author">
                  <h2>{this.state.videosInfo.channel}</h2>
                  <h5>{convertDate(this.state.videosInfo.timestamp)}</h5>
                </div>

                <div className="container-icons">
                  <div className="container-icons__views">
                    <img src={Views} alt="" />
                    <h5>{this.state.videosInfo.views}</h5>
                  </div>

                  <div className="container-icons__likes">
                    <img src={Likes} alt="" />
                    <h5>{this.state.videosInfo.likes}</h5>
                  </div>
                </div>
              </div>
            </div>
            <p className="description-paragraph">
              {this.state.videosInfo.description}
            </p>

            <AddComment addComment={this.addComment} />
            <Comments comments={this.state.videosInfo.comments} />
          </div>
          <div>
            <h2 className="videosTitle">NEXT VIDEO</h2>
            <Videos videos={videos} />
          </div>
        </div>
      </div>
    );
  }
}
