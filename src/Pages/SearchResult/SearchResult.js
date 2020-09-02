import React, { Component } from "react";
import "./SearchResult.scss";

class SearchResult extends Component {
  render() {
    return (
      <div className="SearchResult">
        <div className="noticeContainer">
          <div className="resultContainer">
            <span className="title">루프탑</span>
            <span className="resultText">(으)로 검색한 결과입니다.</span>
          </div>
          <div className="selectBarContainer">
            <div className="optionContainer">
              <div className="optionBox">
                <span className="option">공간 유형</span>
                <div className="optionPopContainer">
                  <span className="optionPop">모든 공간</span>
                  <div className="downArrow"></div>
                </div>
              </div>
              <div className="optionBox">
                <span className="option">지역</span>
                <div className="optionPopContainer">
                  <span className="optionPop">전체</span>
                  <div className="downArrow"></div>
                </div>
              </div>
              <div className="optionBox">
                <span className="option">이용일</span>
                <div className="optionPopContainer">
                  <span className="optionPop">모든 날짜</span>
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

        <ul className="categoryList">
          <li>전체</li>
          <li>시간단위</li>
          <li>패키지단위</li>
          <li>월단위</li>
        </ul>
      </div>
    );
  }
}

export default SearchResult;
