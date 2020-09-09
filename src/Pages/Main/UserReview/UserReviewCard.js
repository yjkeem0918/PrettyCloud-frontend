import React, { Component } from "react";
import "./UserReviewCard";

export default class UserReviewCard extends Component {
  constructor() {
    super();
    this.state = {
      userReview: [],
    };
  }
  componentDidMount = () => {
    this.setState({
      userReview: this.props.userReview,
    });
  };

  render() {
    return (
      <div className="UserReviewCard">
        <div className="reviewImg">
          <img alt="reviewImg" />
        </div>
        <div className="reviewContents">
          <div className="reviewTag">
            {/* {this.state.userReview[0].categories.map((el) => {
              return <span className="review">{el}</span>;
            })} */}
          </div>
          {/* <p className="reviewName">{this.props.reviewName}</p> */}
          <p className="contentPrice"></p>
          <div className="reviewPoint"></div>
          <p className="contents"></p>
        </div>
      </div>
    );
  }
}
