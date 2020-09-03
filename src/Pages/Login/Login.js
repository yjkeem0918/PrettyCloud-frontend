import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  render() {
    return (
      <div className="Login">
          <h1>로그인</h1>
          <main>
            <div className="socialLoginBox">
              <a href="#" className="naver">
                네이버로 로그인
              </a>
              <a href="#" className="kakao">
                카카오로 로그인
              </a>
            </div>
            <div className="or">
              <span className="line"></span>
              <span className="orText">또는</span>
              <span className="line"></span>
            </div>
            <section>
              <div className="inputBox">
                <input className="email" placeholder="이메일"/>
                <input className="password" type="password" placeholder="비밀번호" />
              </div>
              <span className="buttonBox">
                <div className="memory">
                  <input type="checkbox" id="a1" name="로그인기억"/>
                  <label for="a1"> </label>
                  <span>로그인 기억하기</span>
                </div>
                <a>비밀번호 찾기</a>
              </span>
              <button>이메일로 로그인</button>
              <p>
                아직 스페이스클라우드 회원이 아니신가요?
                <Link to="/signUp">
                 <a href="#">회원가입</a>
                </Link>
              </p>
            </section>
          </main>
      </div>
    );
  }
}

export default Login;