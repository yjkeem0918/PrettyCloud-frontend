import React, { Component } from "react";
import "./Reservation.scss";

class Reservation extends Component {
  render() {
    return (
      <div className="Reservation">
        <li className="card">
          <div className="imgBox">
            <div></div>
          </div>
          <div className="listContentsBox">
            <div className="payIcon">예약완료</div>
            <div className="nameOfInfo">[매일소독] 자연광 블랑스튜디오</div>
            <div className="detailOfInfo">
              <span className="dateOfInfo">2020.09.10 (목)</span>
              <span className="timeOfInfo">10 ~ 13시,</span>
              <span>3시간,</span>
              <span>3명</span>
            </div>
            <div className="totalPrice">65,000원</div>
          </div>
        </li>
      </div>
    );
  }
}

export default Reservation;
