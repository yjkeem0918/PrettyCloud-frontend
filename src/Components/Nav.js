import React, { Component } from "react";
import styled from "styled-components";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <NavContainer>
          <NavLogoBox>
            <div></div>
          </NavLogoBox>
          <section>
            <SearchBox>
              <Search placeholder="지역 또는 공간유형을 검색해보세요!"></Search>
              <SearchWrap href="#">
                <div></div>
              </SearchWrap>
            </SearchBox>
          </section>
          <NavLinkContainer>
            <NavLinkWrap>
              <a href="#">기획전</a>
              <a href="#">공간 등록하기</a>
            </NavLinkWrap>
            <NavMenuWrap>
              <div></div>
            </NavMenuWrap>
          </NavLinkContainer>
        </NavContainer>
      </div>
    );
  }
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  top: 0;
  height: 78px;
  width: 100%;
  min-width: 768px;
  background-color: #fff;
`;
const NavLogoBox = styled.div`
  padding: 24px 0 23px 30px;
  div {
    display: inline-block;
    width: 174px;
    height: 31px;
    background-position: -220px -289px;
    background-image: url("https://www.spacecloud.kr/_nuxt/img/08341ee.png");
    background-size: 684px 663px;
  }
`;
const SearchBox = styled.main`
  position: relative;
`;
const Search = styled.input.attrs((props) => ({
  type: "text",
}))`
  outline: none;
  margin-top: 14px;
  padding: 0 16px;
  height: 50px;
  width: 732px;
  font-size: 16px;
  border: none;
  border-bottom: 4px solid #ffd014;
`;
const SearchWrap = styled.a`
  position: absolute;
  top: 50%;
  margin-top: -11px;
  right: 13px;
  div {
    background-size: 684px 663px;
    background-image: url("https://www.spacecloud.kr/_nuxt/img/08341ee.png");
    background-position: -637px -156px;
    width: 30px;
    height: 30px;
  }
`;
const NavLinkContainer = styled.div`
  display: flex;
`;
const NavLinkWrap = styled.div`
  a {
    padding: 0 10px;
    height: 78px;
    line-height: 78px;
    font-size: 20px;
    color: #333;
    cursor: pointer;
  }
`;
const NavMenuWrap = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 78px;
  cursor: pointer;
  div {
    background-size: 684px 663px;
    background-image: url("https://www.spacecloud.kr/_nuxt/img/08341ee.png");
    background-position: -637px -540px;
    width: 28px;
    height: 22px;
  }
`;

export default Login;
