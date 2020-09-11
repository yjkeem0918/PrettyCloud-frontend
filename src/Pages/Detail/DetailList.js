import React, { Component } from "react";
import "./DetailList.scss";

class DetailList extends Component {
  constructor() {
    super();

    this.state = {
      spaceType: ["파티룸", "카페", "촬영스튜디오"],
      time: 2,
      num: 30,
      reser: "4명 초과시 5,000원/인",
    };
  }
  render() {
    const { spaceType, time, num } = this.props;

    return (
      <div className="DetailList">
        <ul className="listDetail">
          <li className="lists">
            <span className="listTitle">공간유형</span>
            <span className="data">
              <span>{spaceType.slice(0, 3).map((el) => `${el} `)}</span>
            </span>
          </li>
          <li className="lists">
            <span className="listTitle">예약시간</span>
            <span className="data">최소 {time} 시간 부터</span>
          </li>
          <li className="lists">
            <span className="listTitle">수용인원</span>
            <span className="data">최소 2명 ~ 최대 {num}명</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default DetailList;
