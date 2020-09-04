import React, { Component } from "react";
import "./AsideNav.scss";

class AsideNav extends Component {
  render() {
    return (
      <div className="AsideNav">
        <aside>
          <div className="profileBox">
            <a href="#" className="profileLogo">
              <img
                alt="spacecloud"
                src="https://www.spacecloud.kr/_nuxt/img/a430bdb.jpg"
              />
            </a>
            <a href="#" className="profileName">
              로그인이 필요합니다.
            </a>
            <a href="#" className="navClose">
              <div></div>
            </a>
          </div>
          <ul className="menuBox">
            <li>
              <a>
                <div className="IconWrapper">
                  <div className="reservationList"></div>
                </div>
                <span>예약 리스트</span>
              </a>
            </li>
          </ul>
          <button className="event">이 달의 기획전</button>
          <ul className="menuList">
            <li>
              <a>
                <div className="homelistName">스페이스 클라우드 홈</div>
                <div className="listIcon"></div>
              </a>
            </li>
            <li>
              <a>
                <div className="homelistName">공지사항</div>
                <div className="listIcon"></div>
              </a>
            </li>
            <li>
              <a>
                <div className="homelistName">도움말</div>
                <div className="listIcon"></div>
              </a>
            </li>
            <li>
              <a>
                <div className="homelistName">1:1문의</div>
                <div className="listIcon"></div>
              </a>
            </li>
            <li>
              <a>
                <div className="homelistName">서비스 정보</div>
                <div className="listIcon"></div>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default AsideNav;
