import React from "react";
import Avatar from "../assets/Images/avatar.png";

const Comments = props => {
  const { comments } = props;
  console.log(props);

  // This will convert the epoch timestamp into human readable date
  const convertDate = date => {
    return new Date(date).toLocaleDateString();
  };

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
              {convertDate(comment.timestamp)}
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
};

export default Comments;
