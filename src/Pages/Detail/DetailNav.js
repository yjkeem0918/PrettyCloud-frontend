import React, { Component } from "react";
import "./DetailNav.scss";

class DetailNav extends Component {
  render() {
    return (
      <div className="DetailNav">
        <ul className="navWrapper">
          <li className="navButton">
            <a href="#idSpace">공간소개</a>
          </li>
          <li className="navButton">
            <a href="#idFacility">시설안내</a>
          </li>
          <li className="navButton">
            <a href="#idReservation">유의사항</a>
          </li>
          <li className="navButton">
            <a href="#idRefund">환불정책</a>
          </li>
          <li className="navButton">
            <a href="#idReview">이용후기</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default DetailNav;
