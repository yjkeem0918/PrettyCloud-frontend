import React, { Component } from "react";
import SpaceInfo from "./SpaceInfo";
import DetailNav from "./DetailNav";
import DetailList from "./DetailList";
import Facility from "./Facility";
import Tags from "./Tags";
import Reservation from "./Reservation";
import Refund from "./Refund";
import Review from "./Review";
import API from "../../config";
import "./Detail.scss";

class Detail extends Component {
  constructor() {
    super();

    this.state = {
      space_id: 0,
      header: "",
      subDescription: "",
      price: "",
      time: 2,
      num: 10,
      imgUrl: [],
      spaceDesc: "",
      subHeader: "",
      tag: [],
      spaceIntro: "",
      opening_hour: "",
      closing_hour: "",
      closed_day: "",
      spaceType: [],
      numValue: 1,
      reservation: "",
      amenities: [],
      reviewNum: 2,
      reviews: [],
      selectDate: "",
      selectStartTime: "",
      selectEndTime: "",
      totalNumber: "",
    };
  }

  componentDidMount() {
    const { space_id } = this.state;
    fetch(`${API}/spaces/detail/${space_id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({
          space_id: res.detail[0].id,
          header: res.detail[0].title,
          subDescription: res.detail[0].subTitle,
          tag: res.detail[0].tags,
          imgUrl: res.detail[0].imgUrl[0],
          imgUrl1: res.detail[0].imgUrl[1],
          spaceIntro: res.detail[0].description,
          opening_hour: res.detail[0].opening_hour,
          closing_hour: res.detail[0].closing_hour,
          closed_day: res.detail[0].closed_day,
          price: res.detail[0].fee,
          num: res.detail[0].capacity,
          time: res.detail[0].min_time,
          precautions: res.detail[0].precautions,
          spaceDesc: res.detail[0].description,
          spaceType: res.detail[0].tags,
          refund_policy: res.detail[0].refund_policy,
          reviews: res.detail[0].Reviews,
          reservation: res.detail[0].precautions,
          amenities: res.detail[0].Amenities.map((el) => el.description),
          reviewNum: res.detail[0].review_number,
        });
      });
  }

  addA = () => {
    const { numValue } = this.state;
    if (numValue >= 10) {
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
    this.setState({ numValue: numValue - 1 });
  };

  handleDate = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleTime1 = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleTime2 = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRbtn = () => {
    const {
      id,
      selectDate,
      selectStartTime,
      selectEndTime,
      numValue,
    } = this.state;
    fetch("http://192.168.219.108:8001/reservation/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        space_id: id,
        date: selectDate.split(" ")[0],
        start_time: selectStartTime.split(":")[0],
        end_time: selectEndTime.split(":")[0],
        people: numValue,
        total_fee: 1,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  };
  render() {
    const {
      header,
      subDescription,
      tag,
      imgUrl,
      imgUrl1,
      price,
      time,
      spaceDesc,
      spaceIntro,
      opening_hour,
      closing_hour,
      closed_day,
      spaceType,
      numValue,
      reservation,
      amenities,
      num,
      reviewNum,
      reviews,
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
                      <span className="shopName">전체 공간</span>
                    </div>
                    <div className="priceTime">
                      <div className="price">₩{Number(price)}</div>
                      <span className="time"> / 시간</span>
                    </div>
                  </div>
                  <div className="spaceInfoWrapper">
                    <div className="meetSpaceInfo">
                      <div className="meetSpacePhoto">
                        <img
                          src={imgUrl1}
                          alt="subphoto"
                          width="296"
                          height="195"
                        />
                      </div>
                      <p className="meetSpaceDesc">{spaceDesc}</p>
                      <DetailList spaceType={spaceType} time={time} num={num} />
                    </div>
                    <div className="selectReservation">
                      <div className="select">날짜 선택</div>
                    </div>
                    <form className="selectDate">
                      <input
                        onChange={this.handleDate}
                        name="selectDate"
                        className="choose"
                        type="date"
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
                      <div className="select">시간 선택</div>
                    </div>
                    <div className="chooseTime">
                      <input
                        onChange={this.handleTime1}
                        name="selectStartTime"
                        className="timeInput"
                        type="time"
                        min="09:00"
                        max="18:00"
                        required
                      ></input>
                      <div className="wave">~</div>
                      <input
                        onChange={this.handleTime2}
                        name="selectEndTime"
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
                      <div className="numberSet">{numValue}</div>
                      <div onClick={this.addA} className="btnPlus"></div>
                    </div>
                  </div>
                  <div className="reservationButtonBox">
                    <p onClick={this.handleRbtn} className="reservationButton">
                      바로 예약하기
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="photoWrapper">
              <div className="mainPhoto">
                <img src={imgUrl} alt="mainphoto" width="773" height="450" />
              </div>
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
            <Facility facilityData={amenities} />
            <Reservation reservationData={reservation} />
            <Refund />
            <Review reviewNum={reviewNum} reviews={reviews} />
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
