import React from "react";
import { Link } from "react-router-dom";

//We need to get the id for each image being clicked

const Videos = props => {
  const { videos } = props;
  console.log(props);
  const videoList = videos.map(video => {
    return (
      <div className="container-videos">
        <div className="video-one" id={video.id}>
          <Link to={`/videos/${video.id}`}>
            <img src={video.image} className="video-next" />
          </Link>

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
