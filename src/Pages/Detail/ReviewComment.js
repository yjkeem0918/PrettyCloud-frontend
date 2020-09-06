import React, { Component } from "react";
import "./ReviewComment.scss";

class ReviewComment extends Component {
  render() {
    return (
      <div className="ReviewComment">
        <div className="userCommentBox">
          <div className="profileImg"></div>
          <div className="commentBox">
            <div className="guestName">{this.props.userid}</div>
            <div className="userComment">{this.props.usercomment}</div>
            <div className="dateTime">
              <div className="date">{this.props.userdate}</div>
              <div className="time">{this.props.usertime}</div>
            </div>
          </div>
        </div>
        <div className="hostCommentBox">
          <div className="host">{this.props.userhost}</div>
          <div className="hostComment">{this.props.hostcomment}</div>
          <div className="dateTime">
            <div className="date">{this.props.hostdate}</div>
            <div className="time">{this.props.hosttime}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewComment;
