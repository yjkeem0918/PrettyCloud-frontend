import React, { Component } from "react";
import "./SpaceCard.scss";

class SpaceCard extends Component {
  render() {
    return (
      <div className="SpaceCard">
        <div className="imageContainer">
          <img alt="previewImage" className="spaceImg" src={this.props.img} />
          <div
            className={
              this.props.paymentType === 1
                ? "immediateContainer"
                : "acceptContainer"
            }
          >
            <span
              className={
                this.props.paymentType === 1 ? "isImmediate" : "isAccept"
              }
            >
              {this.props.paymentType === 1 ? "바로결제" : "승인결제"}
            </span>
          </div>
        </div>

        <div className="infoContainer">
          <span className="name">{this.props.title}</span>

          <div className="locationBox">
            <div className="locationWrapper">
              <div className="icon" />
              <span className="location">{this.props.address}</span>
              <div className="bar" />
            </div>
            <div className="tagWrapper">
              {this.props.tag.map((el) => {
                return <span className="tag">#{el}</span>;
              })}
            </div>
          </div>

          <div className="priceNumberBox">
            <div className="priceWrapper">
              <span className="price">{this.props.fee}</span>
              <span className="unit">원/시간</span>
            </div>
            <div className="numberWrapper">
              <div className="maxUserBox">
                <div className="userIcon"></div>
                <span className="max">최대</span>
                <span className="max">{this.props.capacity}</span>
                <span className="user">인</span>
              </div>
              <div className="replyBox">
                <div className="replyIcon"></div>
                <span className="reply">{this.props.review}</span>
              </div>
              <div className="likesBox">
                <div className="likesIcon"></div>
                <span className="likes">{this.props.like}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpaceCard;
