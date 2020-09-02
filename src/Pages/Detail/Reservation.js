import React, { Component } from "react";
import "./Reservation.scss";

class Reservation extends Component {
  render() {
    return (
      <div className="Reservation">
        <div className="reservationBox">
          <h4 className="reservationHeader">예약시 주의사항</h4>
          <ol>
            <li className="reservationList">
              <span className="num">1</span>
              <span className="desc">
                기물 파손 시 손해배상이 청구될 수 있습니다.
              </span>
            </li>
            <li className="reservationList">
              <span className="num">2</span>
              <span className="desc">
                미성년자는 부모 동반 하에 입실 가능합니다.
              </span>
            </li>
            <li className="reservationList">
              <span className="num">3</span>
              <span className="desc">
                3.4명 초과 시 1인당 5000원 추가됩니다. (초과 요금은 요청사항
                인원 참고하여 결제 금액에 반영)
              </span>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Reservation;
