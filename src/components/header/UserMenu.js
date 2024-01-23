// 사용자 메뉴 - 로그인, 회원가입, 고객센터
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import { BsCaretDownFill } from "react-icons/bs";

const UserMenu = () => {
  const [isUserHelpHover, setUserHelpHover] = useState(false);

  return (
    <Container>
      <UserMenuContainer>
        <Join>회원가입</Join>

        <Line />

        <SignIn>로그인</SignIn>

        <Line />

        <UserHelp
          onMouseOver={() => {setUserHelpHover(true)}}
          onMouseOut={() => {setUserHelpHover(false)}}>
          고객센터
        </UserHelp>
        <UserHelpArrow
          onMouseOver={() => {setUserHelpHover(true)}}
          onMouseOut={() => {setUserHelpHover(false)}}>
          <BsCaretDownFill size="10"/>
        </UserHelpArrow>
      </UserMenuContainer>

      {isUserHelpHover ?
        <UserHelpMenuBox
          onMouseOver={() => {setUserHelpHover(true)}}
          onMouseOut={() => {setUserHelpHover(false)}}>
          <UserHelpMenu>공지사항</UserHelpMenu>
          <UserHelpMenu>자주하는 질문</UserHelpMenu>
          <UserHelpMenu>1:1 문의</UserHelpMenu>
          <UserHelpMenu>대량주문 문의</UserHelpMenu>
        </UserHelpMenuBox>
        :
        <UserHelpMenuBoxNone/>
      }
      
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 0px auto;
  width: 1050px;
  flex-direction: column;
  position: relative;
`;

const UserMenuContainer = styled.div`
  display: flex;
  padding: 10px 0px;
`;

const Join = styled.div`
  color: ${palette.mainColor};
  font-size: 12px;
  cursor: pointer;
  font-weight: 500;
  margin-left: auto;
  padding: 4px 0px;
`;
const SignIn = styled.div`
  color: ${palette.black};
  font-size: 12px;
  cursor: pointer;
  font-weight: 500;
  padding: 4px 0px;
`;
const UserHelp = styled.div`
  color: ${palette.black};
  font-size: 12px;
  cursor: pointer;
  font-weight: 500;
  padding: 4px 0px;
`;
const UserHelpArrow = styled.div`
  cursor: pointer;
  height: 10px;
  margin-top: -2px;
  padding: 4px 0px 4px 5px;
`;
const Line = styled.div`
  width: 1px;
  height: 12px;
  margin: auto 12px;
  background: ${palette.grayD9};
`;

const UserHelpMenuBox = styled.div`
  position: absolute;
  right: 0px;
  top: 33px;
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 96px;
  padding: 4px 9px;
  margin-left: auto;
  background: ${palette.white};
  border: 1px solid ${palette.grayDD};
  z-index: 1000;
`;
const UserHelpMenu = styled.div`
  display: block;
  font-size: 12px;
  cursor: pointer;
  margin: auto 0px;
`;

const UserHelpMenuBoxNone = styled.div`
  display: none;
`;

export default UserMenu;