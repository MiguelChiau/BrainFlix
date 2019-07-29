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

          <textarea rows="4" rows="4" cols="50">
            That was easily the most spectacular BMX moment ever.
          </textarea>

          <button className="container-comment__btn">COMMENT</button>
        </div>
      </div>
    </div>
  );
}

export default Comments;
