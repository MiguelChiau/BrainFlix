import React, { Component } from "react";
import Views from "../assets/Icons/SVG/Icon-views.svg";
import Likes from "../assets/Icons/SVG/Icon-likes.svg";
import Videos from "./Videos.js";
import Comments from "./Comments";

import Avatar from "../assets/Images/Mohan-muruge.jpg";

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
    },
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
    ],
    comments: [
      {
        id: "1",
        name: "Micheal Lyons",
        timestamp: "12/18/2018",
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed"
      },

      {
        id: "2",
        name: "Gary Wong",
        timestamp: "12/12/2018",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!"
      },

      {
        id: "3",
        name: "Theodore Duncan",
        timestamp: "12/15/2018",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitly my favorite ever!"
      }
    ]
  };

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
          <DescriptionText />
          <div className="container">
            <div className="container-avatar">
              <img src={Avatar} alt="" />
            </div>
            <div className="container-comment">
              <div className="container-comment__input">
                <div className="container-comment__title">
                  <label>JOIN THE CONVERSATION</label>

                  <textarea rows="4" rows="4" cols="50">
                    That was easily the most spectacular BMX moment ever.
                  </textarea>
                </div>

                <button className="container-comment__btn">COMMENT</button>
              </div>
            </div>
          </div>

          <Comments comments={this.state.comments} />
        </div>
        <div>
          <h2 className="videosTitle">NEXT VIDEO</h2>
          <Videos videos={this.state.videos} />
        </div>
      </div>
    );
  }
}
