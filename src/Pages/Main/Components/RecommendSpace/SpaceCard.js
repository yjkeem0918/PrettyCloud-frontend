import React, { Component } from "react";
import "./SpaceCard.scss";

class SpaceCard extends Component {
  render() {
    const intFee = Number(this.props.fee);
    return (
      <div className="SpaceCard">
        <li>
          <div className="imageContainer">
            <img alt="previewImage" src={this.props.imgUrl} />
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
                {this.props.tags.map((el) => {
                  return <span>#{el}</span>;
                })}
              </div>
            </div>

            <div className="priceNumberBox">
              <div className="priceWrapper">
                <span className="price">{intFee}</span>
                <span className="unit">원/시간</span>
              </div>
              <div className="numberWrapper">
                <div className="maxUserBox">
                  <div className="userIcon"></div>
                  <span className="maxUser">{this.props.capacity}</span>
                </div>
                <div className="reviewBox">
                  <div className="reviewIcon"></div>
                  <span className="review">{this.props.reviewNumber}</span>
                </div>
                <div className="likesBox">
                  <div className="likesIcon"></div>
                  <span className="likes">{this.props.likeNumber}</span>
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
