import React, { Component } from "react";
import Avatar from "../assets/Images/Mohan-muruge.jpg";

export default class AddComment extends Component {
  state = {
    // name: "",
    // timestamp: "",
    comment: ""
  };

  handleChange = event => {
    this.setState({
      comment: event.target.value
    });
  };

  handleSubmit = event => {
    // console.log(event.target);
    event.preventDefault();
    this.props.addComment(event.target.comment.value);
    event.target.reset();
  };

  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <div className="container-avatar">
          <img src={Avatar} alt="" />
        </div>
        <div className="container-comment">
          <div className="container-comment__input">
            <div className="container-comment__title">
              <label>JOIN THE CONVERSATION</label>

              <textarea
                rows="4"
                rows="4"
                cols="50"
                onChange={this.handleChange}
                name="comment"
              >
                That was easily the most spectacular BMX moment ever.
              </textarea>
            </div>

            <button className="container-comment__btn">COMMENT</button>
          </div>
        </div>
      </form>
    );
  }
}
