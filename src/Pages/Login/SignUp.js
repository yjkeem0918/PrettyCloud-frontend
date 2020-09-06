import React, { Component } from "react";
import "./SignUp.scss";

class SignUp extends Component {
  constructor(){
    super();
    this.state={
      name: "",
      checked: false,
      checked1: false,
      alert: true,
    }
  }
  
  handleAlert = () => {
    this.setState({
      alert: false,
    })
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });  
  console.log(e.target.value)
    if(this.state.name.length >= 2){
      this.setState({
        alert: true
      })
    }
  }
  

  // hiddenAlert = () => {
  //  if(this.state.name.length > 2){
  //    this.setState({
  //      alert: true,
  //    });
  //  }
  //  console.log(this.state.alert)
  // };

  handleCheckbox = () =>{
    const isChecked = !this.state.checked;
     this.setState({
       checked: isChecked,
       checked0: !this.state.checked0,
       checked1: !this.state.checked1,
       checked2: !this.state.checked2,
       checked3: !this.state.checked3
     }); 
  }
  
  
    render() {
        return (
        <div className="SignUp">    
          <main>
          <h1>회원가입</h1>
            <div className="signupContainer"> 
              <div className="socialLoginBox">
                <a href="#">
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
                  <input className="name" placeholder="닉네임"  name="focus" onChange={this.handleName}  onClick={this.handleAlert}/>
                  <div className={ this.state.alert ? "hiddenAlert" : "alertName" }  >
                    닉네임은 두 글자 이상(특수문자 입력 불가) 입력해주세요.
                  </div>
                  <input placeholder="이메일"/>
                  <input type="password" placeholder="비밀번호" />
                  <input type="password" placeholder="비밀번호 확인" />
                </div>
                <div className="checkBox">
                  <div className="allAgree">
                    <input type="checkbox" id="a1" onClick={this.handleCheckbox} checked={this.state.checked}/>
                    <label for="a1"> </label>
                    <span>아래 약관에 모두 동의합니다.</span>
                  </div>
                  <div className="checkWrap">
                    <div className="essential">
                      <input type="checkbox" id="a2" onClick={this.handleACheckbox0}  checked={this.state.checked0}/>
                      <label for="a2"> </label>
                      <span>서비스 이용약관 (필수)</span>
                    </div>
                    <div className="essential">
                      <input type="checkbox" id="a3" checked={this.state.checked1}  onClick={this.handleACheckbox1}/>
                      <label for="a3"> </label>
                      <span>개인정보 처리 방침 (필수)</span>
                    </div>
                    <div className="option">
                      <input type="checkbox" id="a4" checked={this.state.checked2} onClick={this.handleACheckbox2}/>
                      <label for="a4"> </label>
                      <span>이벤트 등 프로모션 알림 SNS 수신 (선택)</span>
                    </div>
                    <div className="option">
                      <input type="checkbox" id="a5" checked={this.state.checked3} onClick={this.handleACheckbox3}/>
                      <label for="a5"> </label>
                      <span>이벤트 등 프로모션 알림 메일 수신 (선택)</span>
                    </div>
                  </div>
                </div>
                <button>회원가입</button>
              </section>
            </div>
          </main>  
        </div>
        );
    }
}

export default SignUp;