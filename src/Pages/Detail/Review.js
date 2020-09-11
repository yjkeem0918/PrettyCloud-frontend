import React, { Component } from "react";
import ReviewComment from "./ReviewComment";
import "./Review.scss";

class Review extends Component {
  render() {
    const { reviewNum, reviews } = this.props;

    return (
      <div className="Review" id="idReview">
        <div className="reviewHeaderBox">
          <h4 className="reviewHeader">
            이용 후기
            <div className="reviewsNumber">
              <span>{reviewNum}</span>개
            </div>
          </h4>
        </div>
        {reviews.map((el) => {
          return (
            <ReviewComment
              key={el.id}
              userid={el.user}
              usercomment={el.description}
            />
          );
        })}
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
