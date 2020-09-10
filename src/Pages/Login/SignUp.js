import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../config";
import KaKaoLogin from "react-kakao-login";
import "./SignUp.scss";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      pw: "",
      pwCheck: "",
      checked: false,
      checked0: false,
      checked1: false,
      checked2: false,
      checked3: false,
      alert: true,
      emailAlert: true,
      pwAlert: true,
      pwCheckAlert: true,
    };
  }
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  checkName = (e) => {
    this.setState({
      alert: this.state.name.length > 1 ? true : false,
    });
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  checkEmail = () => {
    this.setState({
      emailAlert: this.state.email.includes("@" && ".com") ? true : false,
    });
  };

  handlePw = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };

  checkPw = (e) => {
    this.setState({
      pwAlert: this.state.pw.length > 5 ? true : false,
    });
  };

  handleCheckPw = (e) => {
    this.setState({
      pwCheck: e.target.value,
    });
  };

  testPw = (e) => {
    this.setState({
      pwCheckAlert: this.state.pw === this.state.pwCheck ? true : false,
    });
  };

  handleAllCheckbox = () => {
    const isChecked = !this.state.checked;
    this.setState({
      checked: isChecked,
      checked0: !this.state.checked0,
      checked1: !this.state.checked1,
      checked2: !this.state.checked2,
      checked3: !this.state.checked3,
    });
  };

  handleSignUp = () => {
    const { name, email, pw } = this.state;
    fetch(`${API}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: pw,
        profile_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToplStyx8pu0DsUkR-zSI6hAAN-vzcrZF0HA&usqp=CAU",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SUCCESS") {
          alert("회원가입이 완료되었습니다.");
          this.props.history.push("/");
        } else {
          alert("회원가입에 실패하였습니다.");
        }
      });
  };

  render() {
    const {
      name,
      email,
      pw,
      alert,
      emailAlert,
      pwAlert,
      pwCheckAlert,
      checked,
    } = this.state;
    const buttondisabled =
      name &&
      email &&
      pw &&
      alert &&
      emailAlert &&
      pwAlert &&
      pwCheckAlert &&
      checked
        ? false
        : true;
    return (
      <div className="SignUp">
        <main className="signupContainer">
          <h1>회원가입</h1>
          <div className="signupBox">
            <div className="socialLoginBox">
              <a href="#">네이버로 로그인</a>
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
                <input
                  className="name"
                  placeholder="닉네임"
                  name="focus"
                  onKeyUp={this.checkName}
                  onChange={this.handleName}
                />
                <div className={alert ? "hiddenAlert" : "alert"}>
                  닉네임은 두 글자 이상(특수문자 입력 불가) 입력해주세요.
                </div>
                <input
                  placeholder="이메일"
                  onKeyUp={this.checkEmail}
                  onChange={this.handleEmail}
                />
                <div className={emailAlert ? "hiddenAlert" : "alert"}>
                  이메일 형식이 유효하지 않습니다.
                </div>
                <input
                  type="password"
                  placeholder="비밀번호"
                  onKeyUp={this.checkPw}
                  onChange={this.handlePw}
                />
                <div className={pwAlert ? "hiddenAlert" : "alert"}>
                  비밀번호가 너무 짧습니다.
                </div>
                <input
                  type="password"
                  placeholder="비밀번호 확인"
                  onChange={this.handleCheckPw}
                  onKeyUp={this.testPw}
                />
                <div className={pwCheckAlert ? "hiddenAlert" : "alert"}>
                  입력하신 비밀번호와 동일하게 입력해주세요.
                </div>
              </div>
              <div className="checkBox">
                <div className="allAgree">
                  <input
                    type="checkbox"
                    id="a1"
                    onClick={this.handleAllCheckbox}
                    checked={checked}
                  />
                  <label for="a1"> </label>
                  <span>아래 약관에 모두 동의합니다.</span>
                </div>
                <div className="checkWrap">
                  <div className="essential">
                    <input
                      type="checkbox"
                      id="a2"
                      onClick={this.handleACheckbox0}
                      checked={this.state.checked0}
                    />
                    <label for="a2"> </label>
                    <span>서비스 이용약관 (필수)</span>
                  </div>
                  <div className="essential">
                    <input
                      type="checkbox"
                      id="a3"
                      checked={this.state.checked1}
                      onClick={this.handleACheckbox1}
                    />
                    <label for="a3"> </label>
                    <span>개인정보 처리 방침 (필수)</span>
                  </div>
                  <div className="option">
                    <input
                      type="checkbox"
                      id="a4"
                      checked={this.state.checked2}
                      onClick={this.handleACheckbox2}
                    />
                    <label for="a4"> </label>
                    <span>이벤트 등 프로모션 알림 SNS 수신 (선택)</span>
                  </div>
                  <div className="option">
                    <input
                      type="checkbox"
                      id="a5"
                      checked={this.state.checked3}
                      onClick={this.handleACheckbox3}
                    />
                    <label for="a5"> </label>
                    <span>이벤트 등 프로모션 알림 메일 수신 (선택)</span>
                  </div>
                </div>
              </div>
              <button onClick={this.handleSignUp} disabled={buttondisabled}>
                회원가입
              </button>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default SignUp;
