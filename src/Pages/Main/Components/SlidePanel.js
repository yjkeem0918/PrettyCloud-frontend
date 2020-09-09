import React, { Component } from "react";
import "./SlidePanel.scss";

export default class SlidePanel extends Component {
  state = {
    mainSlider: [],
  };

  componentDidMount = () => {
    fetch("http://localhost:3000//Data/mainSlider.json")
      .then((res) => res.json)
      .then((res) => {
        this.setState({
          mainSlider: res,
        });
      });
  };

  render() {
    return (
      <div className="SlidePanel">
        <div className="container">
          <div className="slidPanelImg"></div>
          <div className="slidePanelText">
            <image src="https://kr.object.ncloudstorage.com/scloud-service/service/159281061_a2dd593a8f8234e2b8c715f61e58d6bd.png" />
            <p className="smallText">"집중 잘되는 스터디 공간 모음"</p>
            <p className="bigText">
              "하루종일 공부할 <br /> &nbsp;공간이 필요하다면"
            </p>
            <button className="slidePanelBtn">바로가기</button>
          </div>
        </div>
      </div>
    );
  }
}
