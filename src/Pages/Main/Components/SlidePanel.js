import React, { Component } from 'react'
import "./SlidePanel.scss"

export default class SlidePanel extends Component {
  render() {
    return (
      <div className="SlidePanel">
        <div className="container">
          <div className="slidPanelImg"/>
          <div className="slidePanelText">
            <p className="smallText">집중이 잘되는 스터디 공간 모음</p>
            <p className="bigText">"하루종일 공부할 <br/> &nbsp;공간이 필요하다면"</p>
            <button className="slidePanelBtn">바로가기</button>
          </div>
        </div>
      </div>
    )
  }
}
