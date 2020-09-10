import React, { Component } from "react";
import "./Reservation.scss";

class Reservation extends Component {
  render() {
    const { reservationData } = this.props;

    return (
      <div className="Reservation" id="idReservation">
        <div className="reservationBox">
          <h4 className="reservationHeader">예약시 주의사항</h4>
          <ol className="reservOl">
            {reservationData.split(".").map((reservation, idx) => {
              return (
                <li className="reservationList" key={idx}>
                  <span className="desc">
                    <span className="numbe">{idx + 1}</span> {reservation}
                  </span>
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
