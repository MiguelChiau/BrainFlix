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
      <h2>Next Videos</h2>
      <video poster={Video1} />
      <video poster={Video2} />
      <video poster={Video3} />
      <video poster={Video4} />
      <video poster={Video5} />
      <video poster={Video6} />
      <video poster={Video7} />
      <video poster={Video8} />
    </div>
  );
}

export default Aside;
