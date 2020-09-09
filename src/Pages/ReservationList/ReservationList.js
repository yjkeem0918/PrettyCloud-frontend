import React, { Component } from "react";
import Reservation from "./Reservation";
import AsideNav from "../../Components/AsideNav";
import Footer from "../../Components/Footer";
import "./ReservationList.scss";

class ReservationList extends Component {
  render() {
    return (
      <div className="ReservationList">
        <AsideNav />
        <h1>예약 내역 리스트</h1>
        <main className="cardContainer">
          <div className="list">
            <ul>
              <Reservation />
              <Reservation />
            </ul>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default ReservationList;
