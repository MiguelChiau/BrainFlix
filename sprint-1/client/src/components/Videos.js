import React from "react";
// import MainBody from "./MainBody.js";

const Videos = props => {
  const { videos } = props;
  const videoList = videos.map(video => {
    return (
      <div className="container-videos">
        <h2>NEXT VIDEO</h2>

        <div className="video-one" key={video.id}>
          <video poster={video.image} className="video-next" />
          <div>
            <p className="video-title">{video.title}</p>
            <p className="video-author">{video.channel}</p>
          </div>
        </div>
      </div>
    );
  });
  return <div>{videoList}</div>;
};

export default Videos;
