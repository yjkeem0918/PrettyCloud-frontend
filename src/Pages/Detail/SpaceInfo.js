import React, { Component } from "react";
import "./SpaceInfo.scss";

class SpaceInfo extends Component {
  constructor() {
    super();
    this.state = {
      spaceIntro:
        "어린이 대공원역 인근에 위치한 스튜디오입니다. 인물 촬영, 쇼핑몰 의류/제품 촬영, 유튜브 영상 촬영부터 파티, 세미나, 갤러리 등 다양한 공간으로 활용 가능합니다. 자연광과 인공광을 동시에 사용할 수 있으며, 30개의 전구로 다양한 색상 변경이 가능합니다. 편의 시설도 갖춰져 있기 때문에 다양한 공간 활용이 가능합니다. 바닐라색과 화이트톤의 인테리어가 단정하며, 사진촬영 용도로도 추천합니다.",
      openHour: "8~24시",
      closedDays: "없음",
    };
  }

  render() {
    return (
      <div className="SpaceInfo">
        <div className="introTextBox">
          <h4 className="introHeader">공간 소개</h4>
          <p className="pIntro">{this.state.spaceIntro}</p>
          <ul className="introOfficeHours">
            <li className="officeHours">
              <span className="open">영업시간</span>
              <span className="hours">{this.state.openHour}</span>
            </li>
            <li className="officeHours">
              <span className="open">휴무일</span>
              <span className="hours">{this.state.closedDays}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SpaceInfo;
