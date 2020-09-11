import React, { Component } from "react";
import "./UserReviewCard.scss";

export default class UserReviewCard extends Component {
  render() {
    return (
      <div className="UserReviewCard">
        <div className="reviewImg">
          <img alt="reviewImg" src={this.props.imgUrl} />
        </div>
        <div className="reviewContents">
          <ul className="reviewTag">
            {this.props.tags.map((el) => {
              return <li className="tags">{el}</li>;
            })}
          </ul>
          <p className="reviewTitle">{this.props.title}</p>
          <p className="contentPrice">{this.props.fee}&nbsp;원/시간</p>
          <p className="contents">{this.props.review}</p>
        </div>
      </div>
    );
  }
}
