import React, { Component } from "react";
import styled from "styled-components";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <NavContainer>
          <NavLogoBox>
            <NavLogo></NavLogo>
          </NavLogoBox>
          <SearchContainer>
            <SearchBox>
              <Search placeholder="지역 또는 공간유형을 검색해보세요!"></Search>
              <SearchWrap href="#">
                <SearchIcon></SearchIcon>
              </SearchWrap>
            </SearchBox>
          </SearchContainer>
          <NavLinkContainer>
            <NavLinkWrap>
              <NavLinktext>기획전</NavLinktext>
              <NavLinktext>공간 등록하기</NavLinktext>
            </NavLinkWrap>
            <NavMenuWrap>
              <NavMenu></NavMenu>
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
  top: 0;
  height: 78px;
  width: 100%;
  min-width: 768px;
  border-bottom: 1px solid black;
  background-color: #fff;
`;
const NavLogoBox = styled.div`
  padding: 24px 0 23px 30px;
`;
const NavLogo = styled.div`
  display: inline-block;
  width: 174px;
  height: 31px;
  background-position: -220px -289px;
  background-image: url("https://www.spacecloud.kr/_nuxt/img/08341ee.png");
  background-size: 684px 663px;
`;
const SearchContainer = styled.div``;
const SearchBox = styled.main`
  position: relative;
`;
const Search = styled.input.attrs((props) => ({
  type: "text",
}))`
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
  margin-top: -15px;
  right: 13px;
`;
const SearchIcon = styled.div`
  background-size: 684px 663px;
  background-image: url("https://www.spacecloud.kr/_nuxt/img/08341ee.png");
  background-position: -637px -156px;
  width: 30px;
  height: 30px;
`;
const NavLinkContainer = styled.div`
  display: flex;
`;
const NavLinkWrap = styled.div``;
const NavLinktext = styled.a`
  padding: 0 10px;
  height: 78px;
  line-height: 78px;
  font-size: 20px;
  color: #333;
  cursor: pointer;
`;
const NavMenuWrap = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 78px;
  cursor: pointer;
`;
const NavMenu = styled.div`
  background-size: 684px 663px;
  background-image: url("https://www.spacecloud.kr/_nuxt/img/08341ee.png");
  background-position: -637px -540px;
  width: 28px;
  height: 22px;
`;
export default Login;
