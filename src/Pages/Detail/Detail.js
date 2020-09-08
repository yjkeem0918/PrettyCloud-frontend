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
      header: "스튜디오 바닐라베리 [카페 통대관]",
      subDescrip: "자연광 화이트톤 카페 & 스튜디오",
      shopName: "스튜디오 바닐라베리",
      price: "35,000",
      spaceDesc:
        "어린이대공원역 인근에 위치한 카페 겸 스튜디오 입니다. 파티, 세미나, 스튜디오, 갤러리 등 다양한 공간으로 활용 가능합니다. 자연광과 인공광을 동시에 사용할 수 있으며, 30개의 색상 변환 전구로 다양한 색상으로 공간을 연출할 수 있습니다. 편의 시설도 갖춰져 있기 때문에 다양한 공간 활용이 가능합니다. 그레이와 화이트 인테리어가 돋보이며, 사진 촬영 용도로도 전혀 손색이 없습니다.",
      subHeader: "자연광 화이트톤 카페 & 스튜디오",
    };
  }
  render() {
    return (
      <div className="Detail">
        <div className="detailWrapper">
          <div className="pageHeaderBox">
            <h2 className="pageHeader">{this.state.header}</h2>
            <p className="subDescription">{this.state.subDescrip}</p>
            <Tags />
          </div>
          <div className="detailForms">
            <div className="rightDetailSpaceBox">
              <div className="rightDetailHeaderBox">
                <h3 className="rightDetailHeader">세부공간 선택</h3>
                <div className="iconContainer">
                  <img src="images/share.png" alt="shareicon" />
                  <img src="images/heart.png" alt="hearticon" />
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
                      <span className="shopName">{this.state.shopName}</span>
                    </div>
                    <div className="priceTime">
                      <div className="price">₩{this.state.price}</div>
                      <span className="time"> / 시간</span>
                    </div>
                  </div>
                  <div className="spaceInfoWrapper">
                    <div className="meetSpaceInfo">
                      <div className="meetSpacePhoto"></div>
                      <p className="meetSpaceDesc">{this.state.spaceDesc}</p>
                      <DetailList />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="photoWrapper">
              <div className="mainPhoto"></div>
              <div className="textBox">
                <h3 className="textBoxHeader">{this.state.subHeader}</h3>
              </div>
            </div>
            <DetailNav />
            <SpaceInfo />
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
