import React, { Component } from "react";
import Reservation from "./Reservation";
import "./ReservationList.scss";

class ReservationList extends Component {
  constructor() {
    super();
    this.state = {
      reservation: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/reservation.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          reservation: res.reservation,
        });
      });
  };

  render() {
    return (
      <div className="ReservationList">
        <h1>예약 내역 리스트</h1>
        <main className="cardContainer">
          <div className="list">
            <ul>
              {this.state.reservation.map((el, idx) => {
                return (
                  <Reservation
                    name={el.name}
                    date={el.date}
                    time={el.time}
                    totalTime={el.totalTime}
                    person={el.person}
                    price={el.price}
                    key={idx}
                  />
                );
              })}
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default ReservationList;
