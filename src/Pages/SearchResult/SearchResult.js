import React, { Component } from "react";
import "./SearchResult.scss";

class SearchResult extends Component {
  render() {
    return (
      <div className="SearchResult">
        <div className="noticeContainer">
          <span className="title">루프탑</span>
          <span className="resultText">(으)로 검색한 결과입니다.</span>
          <div className="selectBarContainer">
            <div className="optionContainer">
              <div className="optionBox">
                <span className="optionType">공간 유형</span>
                <div className="optionWrapper">
                  <span className="option">모든 공간</span>
                  <div className="downArrow"></div>
                </div>
              </div>
              <div className="optionBox">
                <span className="optionType">지역</span>
                <div className="optionWrapper">
                  <span className="option">전체</span>
                  <div className="downArrow"></div>
                </div>
              </div>
              <div className="optionBox">
                <span className="optionType">이용일</span>
                <div className="optionWrapper">
                  <span className="option">모든 날짜</span>
                  <div className="calendarIcon"></div>
                </div>
              </div>
            </div>

            <div className="buttonContainer">
              <div className="buttonBox">
                <div className="locationIcon"></div>
                <button className="button">지도</button>
              </div>
              <div className="buttonBox">
                <div className="filterIcon"></div>
                <button className="button">필터</button>
              </div>
            </div>
          </div>
        </div>

        <div className="categoryBarContainer">
          <div className="categoryBox">
            <ul className="categoryList">
              <li>전체 </li>
              <div className="categoryBar"></div>
              <li>시간단위</li>
              <div className="categoryBar"></div>
              <li>패키지단위</li>
              <div className="categoryBar"></div>
              <li>월단위</li>
            </ul>

            <div className="checkBoxContainer">
              <input className="checkingDiscount" type="checkbox" />
              <span className="discountSpace">지금 쿠폰 할인되는 공간</span>
              <span className="newTag">NEW</span>
            </div>
          </div>

          <select>
            <option value="first" selected>
              베스트 공간 순
            </option>
            <option value="second">가격 낮은 순</option>
            <option value="third">가격 높은 순</option>
            <option value="fourth">이용후기 많은 순</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SearchResult;
