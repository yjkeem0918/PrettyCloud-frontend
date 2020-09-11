import React, { Component } from "react";
import "./SpaceInfo.scss";

class SpaceInfo extends Component {
  render() {
    const { spaceInfo, openHour, closingHour, closed_day } = this.props;
    return (
      <div className="SpaceInfo" id="idSpace">
        <div className="introTextBox">
          <h4 className="introHeader">공간 소개</h4>
          <div className="pIntro">
            {spaceInfo.split("\n").map((str, idx) => (
              <p key={idx}>{str}</p>
            ))}
          </div>
          <ul className="introOfficeHours">
            <li className="officeHours">
              <span className="open">영업시간</span>
              <span className="hours">{openHour}</span>
              <span className="wave"> ~ </span>
              <span className="closed">{closingHour}</span>
              <span className="timee">시</span>
            </li>
            <li className="officeHours">
              <span className="open">휴무일</span>
              <span className="hours">{closed_day}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SpaceInfo;
