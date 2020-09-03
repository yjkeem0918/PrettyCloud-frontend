import React, { Component } from "react";
import "./SignUp.scss";

class SignUp extends Component {
    render() {
        return (
            <div className="SignUp">
              <h1>회원가입</h1>
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
                <input className="name" placeholder="닉네임" />
                <input className="email" placeholder="이메일"/>
                <input className="password" type="password" placeholder="비밀번호" />
                <input className="passworCheck" type="password" placeholder="비밀번호 확인" />
              </div>
              <div className="checkBox">
                <div className="allAgree">
                  <input type="checkbox" id="a1" />
                  <label for="a1"> </label>
                  <span>아래 약관에 모두 동의합니다.</span>
                </div>
                <div className="checkWrap">
                  <div className="essential">
                    <input type="checkbox" id="a2" />
                    <label for="a2"> </label>
                    <span>서비스 이용약관 (필수)</span>
                  </div>
                  <div className="essential">
                    <input type="checkbox" id="a3" />
                    <label for="a3"> </label>
                    <span>개인정보 처리 방침 (필수)</span>
                  </div>
                  <div className="option">
                    <input type="checkbox" id="a4" />
                    <label for="a4"> </label>
                    <span>이벤트 등 프로모션 알림 SNS 수신 (선택)</span>
                  </div>
                  <div className="option">
                    <input type="checkbox" id="a5" />
                    <label for="a5"> </label>
                    <span>이벤트 등 프로모션 알림 메일 수신 (선택)</span>
                  </div>
                </div>
              </div>
              <button>회원가입</button>
            </section>
          </main>  
            </div>
        );
    }
}

export default SignUp;