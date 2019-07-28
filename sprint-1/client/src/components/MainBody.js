import React, { Component } from "react";
import Views from "../assets/Icons/SVG/Icon-views.svg";
import Likes from "../assets/Icons/SVG/Icon-likes.svg";
// import SideVideos from "./Videos.js/index.js";
import Videos from "./Videos.js";

import DescriptionText from "./DescriptionText.js";

//Side videos
import Video1 from "../assets/Images/video-list-1.jpg";
import Video2 from "../assets/Images/video-list-2.jpg";
import Video3 from "../assets/Images/video-list-3.jpg";
import Video4 from "../assets/Images/video-list-4.jpg";
import Video5 from "../assets/Images/video-list-5.jpg";
import Video6 from "../assets/Images/video-list-6.jpg";
import Video7 from "../assets/Images/video-list-7.jpg";
import Video8 from "../assets/Images/video-list-8.jpg";

export default class MainBody extends Component {
  state = {
    mainVideo: {
      id: "mainVideo",
      title: "BMX Rampage: 2018 Highlights",
      description: DescriptionText,
      channel: "By Red Cow",
      // image: "type of <string>",
      views: "1, 001, 023",
      likes: "110,985",
      // duration: "type of <string>",
      // video: "type of <string>",
      timestamp: "12/18/2018"
      // comments: "type of <array>"
    }
  };

  state = {
    videos: [
      {
        id: "video-1",
        title: "Become a Travel Pro In One Easy Lesson...",
        channel: "Scotty Cranmer",
        image: Video1
      },
      {
        id: "video-2",
        title: "Les Houches The Hidden Gem Of The...",
        channel: "Scotty Cranmer",
        image: Video2
      },
      {
        id: "video-3",
        title: "Travel Health Useful Medical information...",
        channel: "Scotty Cranmer",
        image: Video3
      },

      {
        id: "video-4",
        title: "Cheap Airline Tickets Great Ways To Save",
        channel: "Emily Harper",
        image: Video4
      },
      {
        id: "video-5",
        title: "Take A Romantic Break In A Boutique Hotel",
        channel: "Ethan Owen",
        image: Video5
      },
      {
        id: "video-6",
        title: "Choose The Perfect Accommodations",
        channel: "Lydia Perez",
        image: Video6
      },
      {
        id: "video-7",
        title: "Cruising Destination Ideas",
        channel: "Timothy Austin",
        image: Video7
      },
      {
        id: "video-8",
        title: "Train Travel On Track For Safety",
        channel: "Scotty Cranmer",
        image: Video8
      }
    ]
  };

  render() {
    return (
      <div className="container-allAndAside ">
        <div className="container-all">
          <div className="container">
            <div>{/* <h1>{state.mainVideo.title}</h1> */}</div>

            <div className="container-authorAndIcons">
              <div className="container-author">
                {/* <h2>{this.state.mainVideo.channel}</h2> */}
                {/* <h5>{this.state.mainVideo.timestamp}</h5> */}
              </div>

              <div className="container-icons">
                <div className="container-icons__views">
                  <img src={Views} alt="" />
                  {/* <h5>{this.state.mainVideo.views}</h5> */}
                </div>

                <div className="container-icons__likes">
                  <img src={Likes} alt="" />
                  {/* <h5>{this.state.mainVideo.likes}</h5> */}
                </div>
              </div>
            </div>
          </div>
          <DescriptionText />
        </div>
        <Videos videos={this.state.videos} />
      </div>
    );
  }
}
