import React, { Component } from "react";
import "./AsideNav.scss";
import Nav from "./Nav";

class AsideNav extends Component {
  constructor() {
    super();
    this.state = {
      close: false,
    };
  }

  openAside = () => {
    this.setState({
      close: !this.state.close,
    });
  };

  closeNav = () => {
    this.setState({
      close: !this.state.close,
    });
  };

  hiddenAside = () => {
    this.setState({
      close: !this.state.close,
    });
  };

  render() {
    return (
      <div className="AsideNav">
        <Nav openAside={this.openAside} />
        <div
          className={this.state.close ? "showAside" : "closeAside"}
          onClick={this.hiddenAside}
        >
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
              <a onClick={this.closeNav} href="#" className="navClose">
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
              <li>
                <a>
                  <div className="IconWrapper">
                    <div className="userReview"></div>
                  </div>
                  <span>이용 후기</span>
                  {/* <div>Q&A 관리</div> */}
                </a>
              </li>
              <li>
                <a>
                  <div className="IconWrapper">
                    <div className="likey"></div>
                  </div>
                  <span>찜한 공간</span>
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
            <div className="serviceBox">
              <a href="#">로그인</a>
              <div>Powered by © NSPACE Corp.</div>
            </div>
            <a href="#" className="bottomButton">
              호스트센터로 이동
              <span></span>
            </a>
          </aside>
        </div>
      </div>
    );
  }
}

export default AsideNav;
