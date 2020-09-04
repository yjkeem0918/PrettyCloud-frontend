import React, { Component } from "react";

export default class UserReview extends Component {
  constructor() {
    super();
    this.state = {
      userReview: [],
    };
  }

  componentDidMount = () => {
    fetch("api주소")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          userReview: res,
        });
      });
  };

  render() {
    return (
      <div className="UserReview">
        <div className="reviewImg">
          <img src="https://moplqfgeemqv2103108.cdn.ntruss.com/service/159915349_7cb739111e55e664441fcaf67cb9176e.jpeg?type=m&w=900&h=900&autorotate=true&quality=90" />
        </div>
        <div className="reviewContents">
          <div className="reviewTag">
            {this.props.reviewTag.map((el) => {
              return <div className="review">{el}</div>;
            })}
          </div>
          <p className="reviewName">{this.props.reviewName}</p>
          <p className="contentPrice"></p>
          <div className="reviewPoint"></div>
          <p className="contents"></p>
        </div>
      </div>
    );
  }
}
