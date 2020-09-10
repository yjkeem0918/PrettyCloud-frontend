import React, { Component } from "react";
import "./Reservation.scss";

class Reservation extends Component {
  render() {
    const { name, date, time, totalTime, person, price } = this.props;
    return (
      <div className="Reservation">
        <li className="card">
          <div className="imgBox">
            <div />
          </div>
          <div className="listContentsBox">
            <div className="payIcon">예약완료</div>
            <div className="nameOfInfo">{name}</div>
            <div className="detailOfInfo">
              <span className="dateOfInfo">{date}</span>
              <span className="timeOfInfo">{time}시,</span>
              <span>{totalTime}시간,</span>
              <span>{person}명</span>
            </div>
            <div className="totalPrice">{price}원</div>
          </div>
        </li>
      </div>
    );
  }
}

export default Reservation;
