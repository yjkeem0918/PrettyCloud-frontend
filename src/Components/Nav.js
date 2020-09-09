import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Nav extends Component {
  render() {
    return (
      <NavContainer>
        <div>
          <NavLogoBox>
            <div></div>
          </NavLogoBox>
          <SearchBox>
            <Search placeholder="지역 또는 공간유형을 검색해보세요!"></Search>
            <SearchWrap href="#">
              <div></div>
            </SearchWrap>
          </SearchBox>
        </div>
        <NavLinkContainer>
          <Link>
            <a>기획전</a>
          </Link>
          <Link>
            <a>공간 등록하기</a>
          </Link>
          <NavLinkIcon onClick={this.props.open}>
            <div></div>
          </NavLinkIcon>
        </NavLinkContainer>
      </NavContainer>
    );
  }
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 7;
  top: 0;
  height: 78px;
  width: 100%;
  min-width: 768px;
  background-color: #fff;
  div {
    display: flex;
    align-items: center;
  }
`;
const NavLogoBox = styled.div`
  padding-left: 30px;
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
  margin-left: 115px;
`;
const Search = styled.input.attrs((props) => ({
  type: "text",
}))`
  outline: none;
  padding: 0 16px;
  height: 50px;
  width: 745px;
  font-size: 16px;
  border: none;
  border-bottom: 4px solid #ffd014;
`;
const SearchWrap = styled.a`
  position: absolute;
  top: 50%;
  margin-top: -15px;
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
  justify-content: space-between;
  a {
    padding: 0 10px;
    height: 78px;
    line-height: 78px;
    font-size: 20px;
    color: #333;
    cursor: pointer;
  }
`;
const NavLinkIcon = styled.a`
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

export default Nav;
