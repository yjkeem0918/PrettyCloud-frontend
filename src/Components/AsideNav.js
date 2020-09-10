import React, { Component } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import "./AsideNav.scss";

const LIST = [
  "스페이스 클라우드 홈",
  "공지사항",
  "도움말",
  "1:1문의",
  "서비스 정보",
];

class AsideNav extends Component {
  constructor() {
    super();
    this.state = {
      close: false,
      isLogin: false,
      userName: "",
    };
  }

  openAside = () => {
    this.setState({
      close: true,
      bg: true,
    });
  };

  closeAside = () => {
    this.setState({
      close: false,
    });
  };

  handleBg = () => {
    this.setState({
      close: false,
    });
  };

  logOut = () => {
    localStorage.removeItem("token");
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://192.168.219.108:8001/users/getUser", {
        method: "POST",
        headers: {
          authorization: token,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (token) {
            this.setState({
              isLogin: true,
              userName: res.userName,
            });
          }
        });
    }
  }

  render() {
    return (
      <div className="AsideNav">
        <Nav open={this.openAside} />
        <div
          className={this.state.close ? "bg" : "no"}
          onClick={this.handleBg}
        ></div>
        <div className={this.state.close ? "showAside" : "hiddenAside"}>
          <aside>
            <div className="profileBox">
              <a href="#" className="profileLogo">
                <img
                  alt="spacecloud"
                  src="https://www.spacecloud.kr/_nuxt/img/a430bdb.jpg"
                />
              </a>
              {this.state.isLogin ? (
                <Link to="/" className="profileName">
                  "{this.state.userName}"님 안녕하세요
                </Link>
              ) : (
                <Link to="/login" className="profileName">
                  로그인이 필요합니다.
                </Link>
              )}
              <a href="#" className="navClose" onClick={this.closeAside}>
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
              {LIST.map((el, idx) => {
                return (
                  <li key={idx}>
                    <a>
                      <div>{el}</div>
                      <div className="listIcon"></div>
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="serviceBox">
              {this.state.isLogin ? (
                <Link to="/" onClick={this.logOut}>
                  <a href="#">로그아웃</a>
                </Link>
              ) : (
                <Link to="/login">
                  <a href="#">로그인</a>
                </Link>
              )}
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
