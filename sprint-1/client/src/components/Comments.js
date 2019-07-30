import React from "react";
import Avatar from "../assets/Images/avatar.png";

const Comments = props => {
  const { comments } = props;
  const commentList = comments.map(comment => {
    return (
      <div className="allComments" key={comment.id}>
        <div className="allComments-image">
          <img src={Avatar} />
        </div>

        <div className="container">
          <div className="container-nameAndTimestamp">
            <div className="container-nameAndTimestamp__name">
              {comment.name}
            </div>
            <div className="container-nameAndTimestamp__timestamp">
              {comment.timestamp}
            </div>
          </div>
          <div className="container-nameAndTimestamp__comments">
            {comment.comment}
          </div>
        </div>
      </div>
    );
  });
  return <div>{commentList}</div>;

  console.log(Comments.length);
};

export default Comments;
