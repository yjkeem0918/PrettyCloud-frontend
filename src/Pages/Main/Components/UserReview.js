import React, { Component } from "react";

export default class UserReview extends Component {
  constructor() {
    super();
    this.state = {
      userReview: [],
      reviewTag: ["회의실", "세미나실", "다목적홀"],
      reviewName: "일산 더리츠 파티룸",
      contentPrice: "89,000 원/패키지",
      contents:
        "되게 넓고 앤틱한 분위기가 너무 예쁜 곳이였어요! 보드게임이랑 소품이랑 조명이랑 다 있어서 사진도 많이 찍고 잘 놀다가요! :)",
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
