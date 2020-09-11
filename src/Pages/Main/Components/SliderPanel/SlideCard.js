import React, { Component } from "react";
import "./SlideCard.scss";

export default class SlideCard extends Component {
  render() {
    // console.log("슬라이드 카드~");
    return (
      <div className="SlideCard">
        <div className="slideContainer">
          <div className="slidCardImg"></div>
          <div className="CardText">
            <image src="https://kr.object.ncloudstorage.com/scloud-service/service/159281061_a2dd593a8f8234e2b8c715f61e58d6bd.png" />
            <p className="cardTitle">{this.props.title}</p>
            <p className="cardDescription">{this.props.description}</p>
            <button className="slideCardBtn">바로가기</button>
          </div>
        </div>
      </div>
    );
  }
}
