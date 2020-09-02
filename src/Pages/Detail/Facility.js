import React, { Component } from "react";
import "./Facility.scss";

class Facility extends Component {
  render() {
    return (
      <div className="Facility">
        <div className="facilityInfoBox">
          <h4 className="facilityHeader">시설 안내</h4>
          <ol>
            <li className="facilityList">
              <span className="numbered">1</span>
              <span className="dataInfo">빔프로젝터</span>
            </li>
            <li className="facilityList">
              <span className="numbered">2</span>
              <span className="dataInfo">음향시설</span>
            </li>
            <li className="facilityList">
              <span className="numbered">3</span>
              <span className="dataInfo">조명시설[색상조정가능]</span>
            </li>
            <li className="facilityList">
              <span className="numbered">4</span>
              <span className="dataInfo">냉장고 및 전기쿡탁</span>
            </li>
            <li className="facilityList">
              <span className="numbered">5</span>
              <span className="dataInfo">플레이트 및 커트러리</span>
            </li>
            <li className="facilityList">
              <span className="numbered">6</span>
              <span className="dataInfo">테이블 및 의자[최대10인]</span>
            </li>
            <li className="facilityList">
              <span className="numbered">7</span>
              <span className="dataInfo">에스프레소머신</span>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Facility;
