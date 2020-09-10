import React, { Component } from "react";
import "./Refund.scss";

const REFUND_DATA = [
  { dates: "이용 8일 전", refund: "총 금액의 100% 환불" },
  { dates: "이용 7일 전", refund: "총 금액의 90% 환불" },
  { dates: "이용 6일 전", refund: "총 금액의 80% 환불" },
  { dates: "이용 5일 전", refund: "총 금액의 70% 환불" },
  { dates: "이용 4일 전", refund: "총 금액의 60% 환불" },
  { dates: "이용 3일 전", refund: "총 금액의 50% 환불" },
  { dates: "이용 2일 전", refund: "환불 불가" },
  { dates: "이용 전날", refund: "환불 불가" },
  { dates: "이용 당일", refund: "환불 불가" },
];

class Refund extends Component {
  render() {
    return (
      <div className="Refund" id="idRefund">
        <div className="refundInfoBox">
          <h4 className="refundHeader">환불규정 안내</h4>
          <div className="noticeRefund">
            <p className="host">
              이용당일(첫 날) 이후에 환불 관련 사항은 호스트에게 직접 문의하셔야
              합니다.
            </p>
            <p>
              결제 후 2시간 이내에는 100% 환불이 가능합니다. (단, 이용시간
              전까지만 가능)
            </p>
          </div>
          <ol>
            {REFUND_DATA.map((el) => {
              return (
                <li className="refundList" key={el.dates}>
                  <span className="day">{el.dates}</span>
                  <span className="price">{el.refund}</span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Refund;
