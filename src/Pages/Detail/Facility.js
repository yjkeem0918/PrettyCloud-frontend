import React, { Component } from "react";
import "./Facility.scss";

const FACILITY_DATA = [
  { id: "1", name: "빔프로젝트" },
  { id: "2", name: "음향시설" },
  { id: "3", name: "조명시설 [색상조정가능]" },
  { id: "4", name: "냉장고 및 전기쿡탁" },
  { id: "5", name: "플레이트 및 커트러리" },
  { id: "6", name: "테이블 및 의자 [최대10인]" },
  { id: "7", name: "에스프레소머신" },
];

class Facility extends Component {
  render() {
    return (
      <div className="Facility">
        <div className="facilityInfoBox">
          <h4 className="facilityHeader">시설 안내</h4>
          <ol>
            {FACILITY_DATA.map((el) => {
              return (
                <li className="facilityList" key={el.id}>
                  <span className="numbered">{el.id}</span>
                  <span className="dataInfo">{el.name}</span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Facility;
