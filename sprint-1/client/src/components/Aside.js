import React from "react";
import Video1 from "../assets/Images/video-list-1.jpg";
import Video2 from "../assets/Images/video-list-2.jpg";
import Video3 from "../assets/Images/video-list-3.jpg";
import Video4 from "../assets/Images/video-list-4.jpg";
import Video5 from "../assets/Images/video-list-5.jpg";
import Video6 from "../assets/Images/video-list-6.jpg";
import Video7 from "../assets/Images/video-list-7.jpg";
import Video8 from "../assets/Images/video-list-8.jpg";

function Aside() {
  return (
    <div className="container-videos">
      <h2>NEXT VIDEO</h2>

      <div className="video-one">
        <video poster={Video1} />
        <div>
          <p className="video-one__title">
            Become a Travel Pro In One Easy Lesson...
          </p>
          <p className="video-one__author">Scotty Cranmer </p>
        </div>
      </div>

      <div className="video-two">
        <video poster={Video2} />
        <div>
          <p className="video-one__title">
            Become a Travel Pro In One Easy Lesson...
          </p>
          <p className="video-one__author">Scotty Cranmer </p>
        </div>
      </div>

      <div className="video-three">
        <video poster={Video3} />
        <div>
          <p className="video-one__title">
            Become a Travel Pro In One Easy Lesson...
          </p>
          <p className="video-one__author">Scotty Cranmer </p>
        </div>
      </div>

      <div className="video-four">
        <video poster={Video4} />
        <div>
          <p className="video-one__title">
            Become a Travel Pro In One Easy Lesson...
          </p>
          <p className="video-one__author">Scotty Cranmer </p>
        </div>
      </div>

      <div className="video-five">
        <video poster={Video5} />
        <div>
          <p className="video-one__title">
            Become a Travel Pro In One Easy Lesson...
          </p>
          <p className="video-one__author">Scotty Cranmer </p>
        </div>
      </div>

      <div className="video-six">
        <video poster={Video6} />
        <div>
          <p className="video-one__title">
            Become a Travel Pro In One Easy Lesson...
          </p>
          <p className="video-one__author">Scotty Cranmer </p>
        </div>
      </div>

      <div className="video-seven">
        <video poster={Video7} />
        <div>
          <p className="video-one__title">
            Become a Travel Pro In One Easy Lesson...
          </p>
          <p className="video-one__author">Scotty Cranmer </p>
        </div>
      </div>

      <div className="video-eight">
        <video poster={Video8} />
        <div>
          <p className="video-one__title">
            Become a Travel Pro In One Easy Lesson...
          </p>
          <p className="video-one__author">Scotty Cranmer </p>
        </div>
      </div>
    </div>
  );
}

export default Aside;
