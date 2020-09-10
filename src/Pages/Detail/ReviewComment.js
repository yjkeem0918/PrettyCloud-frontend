import React, { Component } from "react";
import "./ReviewComment.scss";

class ReviewComment extends Component {
  render() {
    return (
      <div className="ReviewComment">
        <div className="userCommentBox">
          {/* <div className="profileImg"></div> */}
          <div className="commentBox">
            <div className="profileImg"></div>
            <div className="guestName">{this.props.userid}</div>
            <div className="userComment">{this.props.usercomment}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewComment;
