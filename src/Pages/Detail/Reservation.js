import React, { Component } from "react";
import "./Reservation.scss";

const RESERVATION_DATA = [
  { id: "1", info: "기물 파손 시 손해배상이 청구될 수 있습니다." },
  { id: "2", info: "미성년자는 부모 동반 하에 입실 가능합니다." },
  { id: "3", info: "3.4명 초과 시 1인당 5000원 추가됩니다." },
];

class Reservation extends Component {
  render() {
    return (
      <div className="Reservation">
        <div className="reservationBox">
          <h4 className="reservationHeader">예약시 주의사항</h4>
          <ol>
            {RESERVATION_DATA.map((el) => {
              return (
                <li className="reservationList" key={el.id}>
                  <span className="num">{el.id}</span>
                  <span className="desc">{el.info}</span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Reservation;
