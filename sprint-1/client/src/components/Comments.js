import React from "react";

import Avatar from "../assets/Images/Mohan-muruge.jpg";

function Comments() {
  return (
    <div className="container">
      <div className="container-avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="container-comment">
        <div className="container-comment__input">
          <label>JOIN THE CONVERSATION</label>
          <input id="comment" type="text" placeholder="Write comment here" />
          <button className="container-comment__btn">COMMENT</button>
        </div>
      </div>
    </div>
  );
}

export default Comments;
