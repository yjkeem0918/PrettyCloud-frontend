import React, { Component } from "react";
import ReviewComment from "./ReviewComment";
import "./Review.scss";

class Review extends Component {
  constructor() {
    super();
    this.state = {
      reviewData: [
        {
          USER: {
            id: "김댓글",
            usercomment: "최고에요!",
            date: "2020.09.03",
            time: "22:09:26",
          },

          HOST: {
            id: "호스트님의 답글",
            hostcomment: "감동적인 후기 정말 감사합니다.",
            date: "2020.09.04",
            time: "23:08:25",
          },
        },
        {
          USER: {
            id: "김댓글",
            usercomment: "최고에요!",
            date: "2020.09.03",
            time: "22:09:26",
          },

          HOST: {
            id: "호스트님의 답글",
            hostcomment: "감동적인 후기 정말 감사합니다.",
            date: "2020.09.04",
            time: "23:08:25",
          },
        },
      ],
    };
  }
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
        {this.state.reviewData.map((el) => {
          return (
            <ReviewComment
              key={el.USER.id}
              userid={el.USER.id}
              usercomment={el.USER.usercomment}
              userdate={el.USER.date}
              usertime={el.USER.time}
              userhost={el.HOST.id}
              hostcomment={el.HOST.hostcomment}
              hostdate={el.HOST.date}
              hosttime={el.HOST.time}
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
