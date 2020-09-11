import React, { Component } from "react";
import Reservation from "./Reservation";
import API from "../../config";
import AsideNav from "../../Components/AsideNav";
import "./ReservationList.scss";

class ReservationList extends Component {
  constructor() {
    super();
    this.state = {
      reservation: [],
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://192.168.219.108:8001/reservation/get", {
        method: "GET",
        headers: {
          authorization: token,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            reservation: res.data[0],
          });
        });
    }
  };

  render() {
    return (
      <div className="ReservationList">
        <AsideNav />
        <h1>예약 내역 리스트</h1>
        <main className="cardContainer">
          <div className="list">
            <ul>
              {this.state.reservation.map((el, idx) => {
                return (
                  <Reservation
                    name={el.title}
                    time={`${el.start_time}~${el.end_time}`}
                    totalTime={el.end_time - el.start_time}
                    person={el.people}
                    price={parseInt(el.total_fee).toLocaleString()}
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
