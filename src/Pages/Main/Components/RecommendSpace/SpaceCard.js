import React, { Component } from "react";
import "./SpaceCard.scss";

class SpaceCard extends Component {
  render() {
    console.log("card 나와?");
    return (
      <div className="SpaceCard">
        <li>
          <div className="imageContainer">
            <img alt="previewImage" src="/images/space.jpeg" />
          </div>

          <div className="infoContainer">
            <span className="name">{this.props.title}</span>

            <div className="locationBox">
              <div className="locationWrapper">
                <div className="icon" />
                <span className="location">연남동</span>
                <div className="bar" />
              </div>
              <div className="tagWrapper">
                <span>#파티룸</span>
                <span>#루프탑</span>
                <span>#홍대</span>
                <span>#데이트</span>
                <span>#연남동</span>
              </div>
            </div>

            <div className="priceNumberBox">
              <div className="priceWrapper">
                <span className="price">20,000</span>
                <span className="unit">원/시간</span>
              </div>
              <div className="numberWrapper">
                <div className="maxUserBox">
                  <div className="userIcon"></div>
                  <span className="maxUser">최대 8인</span>
                </div>
                <div className="replyBox">
                  <div className="replyIcon"></div>
                  <span className="reply">0</span>
                </div>
                <div className="likesBox">
                  <div className="likesIcon"></div>
                  <span className="likes">28</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default SpaceCard;
