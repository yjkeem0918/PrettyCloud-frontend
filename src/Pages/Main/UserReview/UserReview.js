import React, { Component } from "react";
import UserReviewCard from "./UserReviewCard";
import "./UserReview.scss";

export default class UserReview extends Component {
  constructor() {
    super();
    this.state = {
      userReview: [
        {
          spaceId: 1,
          imgUrl:
            "https://moplqfgeemqv2103108.cdn.ntruss.com/service/159915349_7cb739111e55e664441fcaf67cb9176e.jpeg?type=m&w=900&h=900&autorotate=true&quality=90",
          title: "일산 더리츠 파티룸",
          location: "",
          categories: ["회의실", "세미나실", "다목적홀", "파티룸", "엠티장소"], //해시태그
          fee: 89000,
          capacity: 20, //최대인원
          commentNumber: 2,
          likeNumber: 2,
          avgRating: 5,
          review:
            "되게 넓고 앤틱한 분위기가 너무 예쁜 곳이였어요! 보드게임이랑 소품이랑 조명이랑 다 있어서 사진도 많이 찍고 잘 놀다가요! :)",
          payemntType: 1, // 1: 바로결제, 2:승인결제
          classType: 1, // 1:프리미엄, 2:플러스, 3:일반
        },
        {
          spaceId: 2,
          imgUrl:
            "https://moplqfgeemqv2103108.cdn.ntruss.com/service/159914405_88f9936b546f2b2d5fd9a62906426814.jpeg?type=m&w=900&h=900&autorotate=true&quality=90",
          title: "라일락룸",
          location: "",
          categories: ["연습실", "파티룸"], //해시태그
          fee: 18000,
          capacity: 30, //최대인원
          commentNumber: 2,
          likeNumber: 2,
          avgRating: 5,
          review:
            "룸 들어가자마자 너무 예뻤어요! 감성 가득한 인테리어에 전신거울도 있고 조명도 밝아서 친구들끼리 사진찍기도 너무 좋았어요 ㅎㅎ 샴페인주셨는데 가져온 음식이 많아서 마시지 못했어요ㅠㅠ 커트러리나 필요한물품 등 다양...",
          payemntType: 2, // 1: 바로결제, 2:승인결제
          classType: 3, // 1:프리미엄, 2:플러스, 3:일반
        },
      ],
    };
  }

  componentDidMount = () => {
    fetch("api주소")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          userReview: res.spaces,
        });
      });
  };

  render() {
    // const userReview = this.state.userReview;

    return (
      <div className="UserReview">
        <UserReviewCard userReview={this.state.userReview} />
      </div>
    );
  }
}
