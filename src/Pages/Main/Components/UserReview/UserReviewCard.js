import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UserReviewCard.scss";

export default class UserReviewCard extends Component {
  render() {
    const { spaceCardId } = this.props;
    const tagLimit = this.props.tags.slice(0, 4);
    return (
      <div className="UserReviewCard">
        <div className="reviewImg">
          <Link to={`/detail/${spaceCardId}`}>
            <img className="img" alt="reviewImg" src={this.props.imgUrl} />
          </Link>
        </div>
        <div className="reviewContents">
          <ul className="reviewTag">
            {tagLimit.map((el) => {
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
