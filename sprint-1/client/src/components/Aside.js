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
        <video poster={Video1} className="video-next" />

        <div>
          <p className="video-title">
            Become a Travel Pro In One Easy Lesson...
          </p>
          <p className="video-author">Scotty Cranmer </p>
        </div>
      </div>

      <div className="video-two">
        <video poster={Video2} className="video-next" />
        <div>
          <p className="video-title">Les Houches The Hidden Gem Of The...</p>
          <p className="video-author">Scotty Cranmer </p>
        </div>
      </div>

      <div className="video-three">
        <video poster={Video3} className="video-next" />
        <div>
          <p className="video-title">
            Travel Health Useful Medical information...
          </p>
          <p className="video-author">Scotty Cranmer </p>
        </div>
      </div>

      <div className="video-four">
        <video poster={Video4} className="video-next" />
        <div>
          <p className="video-title">
            Cheap Airline Tickets Great Ways To Save
          </p>
          <p className="video-author">Emily Harper </p>
        </div>
      </div>

      <div className="video-five">
        <video poster={Video5} className="video-next" />
        <div>
          <p className="video-title">
            Take A Romantic Break In A Boutique Hotel
          </p>
          <p className="video-author">Ethan Owen </p>
        </div>
      </div>

      <div className="video-six">
        <video poster={Video6} className="video-next" />
        <div>
          <p className="video-title">Choose The Perfect Accommodations</p>
          <p className="video-author">Lydia Perez</p>
        </div>
      </div>

      <div className="video-seven">
        <video poster={Video7} className="video-next" />
        <div>
          <p className="video-title">Cruising Destination Ideas</p>
          <p className="video-author">Timothy Austin</p>
        </div>
      </div>

      <div className="video-eight">
        <video poster={Video8} className="video-next" />
        <div>
          <p className="video-title">Train Travel On Track For Safety</p>
          <p className="video-author">Scotty Cranmer</p>
        </div>
      </div>
    </div>
  );
}

export default Aside;
