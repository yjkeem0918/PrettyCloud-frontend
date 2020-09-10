import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../config";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pw: "",
      alertEmail: true,
    };
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  checkEmail = () => {
    this.setState({
      alertEmail: this.state.email.includes("@" && ".com") ? true : false,
    });
  };

  handlePw = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };

  handleLogin = () => {
    const { email, pw } = this.state;
    fetch(`${API}/users/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: pw,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          this.props.history.push("./");
          alert("로그인 성공했습니다.");
        } else {
          alert("이메일 또는 비밀번호를 확인하세요.");
        }
      });
  };

  render() {
    const { email, pw, alertEmail } = this.state;
    return (
      <div className="Login">
        <main className="loginContainer">
          <h1>로그인</h1>
          <div className="loginBox">
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
                  placeholder="이메일"
                  onChange={this.handleEmail}
                  onKeyUp={this.checkEmail}
                />
                <div className={alertEmail ? "hiddenAlert" : "alert"}>
                  이메일 형식이 유효하지 않습니다.
                </div>
                <input
                  className="password"
                  type="password"
                  placeholder="비밀번호"
                  onChange={this.handlePw}
                />
              </div>
              <div className="buttonBox">
                <div className="memory">
                  <input type="checkbox" id="a1" name="로그인기억" />
                  <label for="a1"> </label>
                  <span>로그인 기억하기</span>
                </div>
                <a>비밀번호 찾기</a>
              </div>
              <button
                onClick={this.handleLogin}
                disabled={email && pw.length > 5 && alertEmail ? false : true}
              >
                이메일로 로그인
              </button>
              <p>
                아직 스페이스클라우드 회원이 아니신가요?
                <Link to="/signUp">회원가입</Link>
              </p>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default Login;
