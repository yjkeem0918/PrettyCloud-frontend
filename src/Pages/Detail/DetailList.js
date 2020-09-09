import React, { Component } from "react";
import "./DetailList.scss";

class DetailList extends Component {
  constructor() {
    super();

    this.state = {
      spaceType: ["파티룸", "카페", "촬영스튜디오"],
      time: "최소 2시간 부터",
      num: "최소 2명 ~ 최대 10명",
      reser: "4명 초과시 5,000원/인",
    };
  }
  render() {
    const { spaceType } = this.props;

    return (
      <div className="DetailList">
        <ul className="listDetail">
          <li className="lists">
            <span className="listTitle">공간유형</span>
            <span className="data">
              <span>{spaceType}</span>
            </span>
          </li>
          <li className="lists">
            <span className="listTitle">예약시간</span>
            <span className="data">{this.state.time}</span>
          </li>
          <li className="lists">
            <span className="listTitle">수용인원</span>
            <span className="data">{this.state.num}</span>
          </li>
          <li className="lists">
            <span className="listTitle">예약기준</span>
            <span className="data">{this.state.reser}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default DetailList;
