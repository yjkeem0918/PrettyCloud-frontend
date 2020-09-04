import React, { Component } from "react";
import SlidePanel from "./Components/SlidePanel";
import SearchSpaceList from "./Components/SearchSpaceList";
import RecommendSpace from "./Components/RecommendSpace";
import UserReview from "./Components/UserReview";
import "./Main.scss";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      spaceList: [
        "루프탑",
        "촬영스튜디오",
        "엠티장소",
        "스터디룸",
        "연습실",
        "파티룸",
        "브라이덜샤워",
        "회의실",
        "세미나실",
        "카페",
        "레저시설",
        "독립오피스",
      ],
      reviewTag: ["회의실", "세미나실", "다목적홀"],
      reviewName: "일산 더리츠 파티룸",
      contentPrice: "89,000 원/패키지",
      contents:
        "되게 넓고 앤틱한 분위기가 너무 예쁜 곳이였어요! 보드게임이랑 소품이랑 조명이랑 다 있어서 사진도 많이 찍고 잘 놀다가요! :)",
    };
  }

  render() {
    return (
      <div className="Main">
        <section className="topSlidePanel">
          <SlidePanel />
        </section>

        <section className="searchSpace">
          <p className="mainSubTitle">어떤 공간을 찾고 있나요?</p>
          <ul className="spaceList">
            {this.state.spaceList.map((el) => {
              return <SearchSpaceList spaceListFromMain={el} />;
            })}
          </ul>
        </section>

        <section className="recommendSpace">
          <p className="mainSubTitle">오늘의 추천공간</p>
          <div className="contentSlider">
            <RecommendSpace />
          </div>
        </section>
        <section className="userReview">
          <p className="mainSubTitle">이용자 리뷰</p>
          <p className="titleContent">생생한 후기를 만나보세요</p>
          {/* <UserReview /> */}
        </section>
      </div>
    );
  }
}
