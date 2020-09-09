import React, { Component } from "react";
import "./Reservation.scss";

class Reservation extends Component {
  render() {
    return (
      <div className="Reservation">
        <li className="card">
          <div className="imgBox">
            <div />
          </div>
          <div className="listContentsBox">
            <div className="payIcon">예약완료</div>
            <div className="nameOfInfo">{this.props.name}</div>
            <div className="detailOfInfo">
              <span className="dateOfInfo">{this.props.date}</span>
              <span className="timeOfInfo">{this.props.time}시,</span>
              <span>{this.props.totalTime}시간,</span>
              <span>{this.props.person}명</span>
            </div>
            <div className="totalPrice"> {this.props.price}원</div>
          </div>
        </li>
      </div>
    );
  }
}

export default Reservation;
