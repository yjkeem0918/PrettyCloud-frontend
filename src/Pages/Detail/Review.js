import React, { Component } from "react";
import ReviewComment from "./ReviewComment";
import "./Review.scss";

class Review extends Component {
  render() {
    return (
      <div className="Review">
        <div className="reviewHeaderBox">
          <h4 className="reviewHeader">
            이용 후기
            <div className="reviewsNumber">
              <span>1</span>개<span className="dot"></span>
            </div>
            <div className="average">
              <span className="mark">평균 평점</span>
              <span className="stars">0.0</span>
            </div>
          </h4>
        </div>
        <ReviewComment />
        <div className="paging">
          <span className="prev1"></span>
          <span className="prev2"></span>
          <span className="pageNum">1</span>
          <span className="next1"></span>
          <span className="next2"></span>
        </div>
      </div>
    );
  }
}

export default Review;
