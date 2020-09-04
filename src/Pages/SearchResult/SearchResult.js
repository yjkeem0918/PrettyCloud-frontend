import React, { Component } from "react";
import "./SearchResult.scss";

const OPTIONS = [
  { id: "1", type: "공간 유형", option: "모든 공간", icon: "downArrow" },
  { id: "2", type: "지역", option: "전체", icon: "downArrow" },
  { id: "3", type: "이용일", option: "모든 날짜", icon: "calendarIcon" },
];

const CATEGORY = [
  { list: "전체", bar: true },
  { list: "시간단위", bar: true },
  { list: "패키지단위", bar: true },
  { list: "월단위", bar: false },
];

const SELECT = [
  { value: "first", order: "베스트 공간 순" },
  { value: "second", order: "가격 낮은 순" },
  { value: "third", order: "가격 높은 순" },
  { value: "fourth", order: "이용후기 많은 순" },
];

const BUTTON = [
  { id: "1", icon: "locationIcon", name: "지도" },
  { id: "2", icon: "filterIcon", name: "필터" },
];

class SearchResult extends Component {
  render() {
    return (
      <div className="SearchResult">
        <div className="noticeContainer">
          <div className="noticeBox">
            <span className="title">루프탑</span>
            <span className="resultText">(으)로 검색한 결과입니다.</span>

            <div className="selectBarContainer">
              <div className="optionContainer">
                {OPTIONS.map((el) => {
                  return (
                    <div className="optionBox" key={el.id}>
                      <span className="optionType">{el.type}</span>
                      <div className="optionWrapper">
                        <span className="option">{el.option}</span>
                        <div className={el.icon} />
                      </div>
                    </div>
                  );
                })}
                <div className="buttonContainer">
                  {BUTTON.map((el) => {
                    return (
                      <div className="buttonBox" key={el.id}>
                        <div className={el.icon} />
                        <button className="button">{el.name}</button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="categoryBarContainer">
          <div className="categoryBox">
            <ul className="categoryList">
              {CATEGORY.map((el) => {
                return (
                  <>
                    <li>{el.list}</li>
                    <div className={el.bar ? "categoryBar" : ""} />
                  </>
                );
              })}
            </ul>

            <div className="checkBoxContainer">
              <input className="checkingDiscount" type="checkbox" />
              <span className="discountSpace">지금 쿠폰 할인되는 공간</span>
              <span className="newTag">NEW</span>
            </div>
          </div>

          <select>
            {SELECT.map((el) => {
              return (
                <>
                  <option value={el.value}>{el.order}</option>
                </>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default SearchResult;
