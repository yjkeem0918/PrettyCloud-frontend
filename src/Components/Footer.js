import React, { Component } from "react";
import styled from "styled-components";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <FooterContainer>
          <FooterBox>
            <Top>
              <Logo></Logo>
              <TopInfoBox>
                <li>블로그</li>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>운영정책</li>
                <li>고객 문의</li>
              </TopInfoBox>
            </Top>
            <Bottom>
              <Info>
                <li>상호명: 주식회사 앤스페이스</li>
                <li>대표: 정수현</li>
                <li>사업자등록번호: 230-81-03117</li>
                <li>통신판매업신고번호: 2018-서울강남-04590</li>
                <li>사업자등록정보 > </li>
                <li>영업소재지: 서울특별시 강남구 삼성로 414</li>
                <li>이메일: office@spacecloud.kr</li>
                <li>대표전화: 1599-4312(평일 오후 2시 ~ 오후 6시)</li>
                <li>온라인 1:1문의 바로가기(평일 오전 10시 ~ 오후6시)</li>
                <li>
                  *공간에 대한 문의사항은 해당 공간 호스트에서 직접
                  문의해주세요.
                </li>
              </Info>
              <FooterIcon>
                <Icon></Icon>
                <IconBlog></IconBlog>
                <IconFacebook></IconFacebook>
                <IconTwitter></IconTwitter>
                <IconInsta></IconInsta>
              </FooterIcon>
            </Bottom>
            <Caution>
              <p>
                스페이스클라우드는 통신판매중개자이며 통신판매의 당사자가
                아닙니다. 따라서 스페이스클라우드는 공간 거래정보 및 거래에 대해
                책임지지 않습니다.
              </p>
              <span>Copyright NSPACE Corp. All Rights Reserved.</span>
            </Caution>
          </FooterBox>
        </FooterContainer>
      </div>
    );
  }
}
const FooterContainer = styled.footer`
  display: block;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 54px 0 50px;
  background-color: #ebebeb;
  color: #656565;
  font-size: 13px;
`;
const FooterBox = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1158px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 23px;
  border-bottom: 1px solid #e0e0e0;
`;
const Logo = styled.div`
  width: 170px;
  height: 34px;
  background-image: url("https://www.spacecloud.kr/_nuxt/img/08341ee.png");
  background-size: 684px 663px;
  background-position: -320px -250px;
`;
const TopInfoBox = styled.ul`
  display: flex;
  li {
    margin-left: 9px;
    color: #535353;
    font-size: 15px;
  }
`;
const Bottom = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
`;
const Info = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 830px;
  height: 76px;
  li {
    margin-right: 10px;
    color: #656565;
    font-size: 13px;
  }
`;
const FooterIcon = styled.div`
  display: flex;
`;
const Icon = styled.div`
  width: 35px;
  height: 35px;
  margin-left: 3px;
  background-image: url("https://www.spacecloud.kr/_nuxt/img/08341ee.png");
  background-size: 684px 663px;
  background-position: -389px -380px;
`;
const IconBlog = styled(Icon)`
  background-position: -400px -507px;
`;
const IconFacebook = styled(Icon)`
  background-position: -361px -507px;
`;
const IconTwitter = styled(Icon)`
  background-position: -428px -380px;
`;
const IconInsta = styled(Icon)`
  background-position: -439px -507px;
`;
const Caution = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 27px;
  span {
    color: #949494;
  }
`;
export default Footer;
