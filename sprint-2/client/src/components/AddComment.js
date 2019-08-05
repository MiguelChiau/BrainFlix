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
      <div className="container-All">
        <p className="container-header">3 Comments</p>
        <form className="container" onSubmit={this.handleSubmit}>
          <div className="container-big">
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
                    placeholder="That was easily the most spectacular BMX moment ever."
                  />
                </div>
                <div>
                  <button className="container-comment__btn">COMMENT</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
