// 사용자 메뉴 - 로그인, 회원가입, 고객센터
import React from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import { BsCaretDownFill } from "react-icons/bs";

const UserMenu = () => {
  return (
    <Container>
      <Join>회원가입</Join>

      <Line />

      <SignIn>로그인</SignIn>

      <Line />

      <UserHelp>고객센터</UserHelp>
      <UserHelpArrow>
        <BsCaretDownFill size="10"/>
      </UserHelpArrow>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 10px 0px;
  margin: 0px auto;
  width: 1050px;
`;

const Join = styled.div`
  color: ${palette.mainColor};
  font-size: 12px;
  cursor: pointer;
  font-weight: 500;
  margin-left: auto;
`;
const SignIn = styled.div`
  color: ${palette.black};
  font-size: 12px;
  cursor: pointer;
  font-weight: 500;
`;
const UserHelp = styled.div`
  color: ${palette.black};
  font-size: 12px;
  cursor: pointer;
  font-weight: 500;
`;
const UserHelpArrow = styled.div`
  padding-left: 5px;
  cursor: pointer;
  height: 10px;
  margin-top: -2px;
`;
const Line = styled.div`
  width: 1px;
  height: auto;
  margin: 0px 12px;
  background: ${palette.grayD9};
`;

export default UserMenu;