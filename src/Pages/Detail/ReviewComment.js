import React, { Component } from "react";
import "./ReviewComment.scss";

class ReviewComment extends Component {
  render() {
    return (
      <div className="ReviewComment">
        <div className="userCommentBox">
          <div className="profileImg"></div>
          <div className="commentBox">
            <div className="guestName">김댓글</div>
            <div className="userComment">
              아니 여러분 1층이면 자연광 잘 안되는 장소가 겁나게 많은데 그
              가치관 다 뚫었어요ㅠㅠㅠㅠ 진짜 진짜ㅠㅠㅠ 자연광 최고구요 사장님
              짱 친절하시구 바로 앞에 편의점도 있어서 물이나 그런거 즉각즉각
              가능해요ㅠㅠㅠ 진짜 다들 꼭 한 번 가보셔요 진짜 최고ㅠㅠㅠ
            </div>
            <div className="timeInfo">2020.09.03 22:09:26</div>
          </div>
          <div className="hostCommentBox">
            <div className="host">호스트님의 답글</div>
            <div className="hostComment">감동적인 후기 정말 감사합니다.</div>
            <div className="timeInfo">2020.09.04 23:08:25</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewComment;
