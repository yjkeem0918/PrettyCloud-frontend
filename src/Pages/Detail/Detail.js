import React, { Component } from "react";
import SpaceInfo from "./SpaceInfo";
import DetailNav from "./DetailNav";
import DetailList from "./DetailList";
import Facility from "./Facility";
import Tags from "./Tags";
import Reservation from "./Reservation";
import Refund from "./Refund";
import Review from "./Review";
import "./Detail.scss";

class Detail extends Component {
  constructor() {
    super();

    this.state = {
      header: "",
      subDescription: "",
      price: "",
      spaceDesc: "",
      subHeader: "",
      tag: [],
      spaceIntro: "",
      opening_hour: "",
      closing_hour: "",
      closed_day: "",
      spaceType: [],
      numValue: 1,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/detail.json")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({
          id: res.space.id,
          header: res.space.title,
          subDescription: res.space.subTitle,
          tag: res.categories,
          spaceIntro: res.space.description,
          opening_hour: res.space.opening_hour,
          closing_hour: res.space.closing_hour,
          closed_day: res.space.closed_day,
          price: res.space.fee,
          precautions: res.space.precautions,
          spaceDesc: res.space.description,
          spaceType: res.categories,
          refund_policy: res.space.refund_policy,
        });
      });
  }

  addA = () => {
    if (this.state.numValue >= 10) {
      alert("최대 인원은 10명 입니다.");
      return;
    }
    this.setState({ numValue: this.state.numValue + 1 });
  };

  subtractA = () => {
    const { numValue } = this.state;
    if (numValue <= 1) {
      alert("최소 인원은 1명 입니다.");
      return;
    }
    this.setState({ numValue: this.state.numValue - 1 });
  };

  render() {
    const {
      header,
      subDescription,
      tag,
      price,
      spaceDesc,
      spaceIntro,
      opening_hour,
      closing_hour,
      closed_day,
      spaceType,
      numValue,
    } = this.state;

    return (
      <div className="Detail">
        <div className="detailWrapper">
          <div className="pageHeaderBox">
            <h2 className="pageHeader">{header}</h2>
            <p className="subDescription">{subDescription}</p>
            <Tags categories={tag} />
          </div>
          <div className="detailForms">
            <div className="rightDetailSpaceBox">
              <div className="rightDetailHeaderBox">
                <h3 className="rightDetailHeader">세부공간 선택</h3>
                <div className="iconContainer">
                  <img
                    className="share"
                    src="images/share.png"
                    alt="shareicon"
                  />
                  <img
                    className="heart"
                    src="images/heart.png"
                    alt="hearticon"
                  />
                </div>
              </div>
              <div className="spaceBox">
                <div className="respondInfos">
                  <p className="pRespond">
                    호스트의 승인을 기다릴 필요 없이
                    <br />
                    지금 바로 예약하세요!
                  </p>
                </div>
                <div className="detailList">
                  <div className="shopInfoBox">
                    <div className="shopInfo">
                      <input type="radio" className="radio" />
                      <span className="shopName">전체공간</span>
                    </div>
                    <div className="priceTime">
                      <div className="price">₩{price}</div>
                      <span className="time"> / 시간</span>
                    </div>
                  </div>
                  <div className="spaceInfoWrapper">
                    <div className="meetSpaceInfo">
                      <div className="meetSpacePhoto"></div>
                      <p className="meetSpaceDesc">{spaceDesc}</p>
                      <DetailList spaceType={spaceType} />
                    </div>
                    <div className="selectReservation">
                      <div className="select">날짜선택</div>
                    </div>
                    <form className="selectDate">
                      <input
                        className="choose"
                        type="date"
                        name="bday"
                        required
                        pattern="\d{4}-\d{2}-\d{2}"
                      ></input>
                      <span className="validity"></span>
                      <p className="precautions">
                        예약 도중 이탈하시는 경우 (결제 오류 및 취소 등), 중복
                        예약 방지 목적으로 10분 동안 해당 날짜에 예약 하실 수
                        없습니다.
                      </p>
                    </form>
                    <div className="selectTime">
                      <div className="select">시간선택</div>
                    </div>
                    <div className="chooseTime">
                      <input
                        className="timeInput"
                        type="time"
                        min="09:00"
                        max="18:00"
                        required
                      ></input>
                      <div className="wave">~</div>
                      <input
                        className="timeInput"
                        type="time"
                        min="09:00"
                        max="18:00"
                        required
                      ></input>
                    </div>
                    <div className="selectReservation">
                      <div className="select">총 예약 인원</div>
                    </div>
                    <div className="numBox">
                      <div onClick={this.subtractA} className="btnMinus"></div>
                      <input
                        className="numberSet"
                        value={numValue}
                        type="text"
                      ></input>
                      <div onClick={this.addA} className="btnPlus"></div>
                    </div>
                  </div>
                  <div className="reservationButtonBox">
                    <p className="reservationButton">바로 예약하기</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="photoWrapper">
              <div className="mainPhoto"></div>
              <div className="textBox">
                <h3 className="textBoxHeader">{subDescription}</h3>
              </div>
            </div>
            <DetailNav />
            <SpaceInfo
              spaceInfo={spaceIntro}
              openHour={opening_hour}
              closingHour={closing_hour}
              closed_day={closed_day}
            />
            <Facility />
            <Reservation />
            <Refund />
            <Review />
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
