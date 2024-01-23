// 메뉴 탭
import React from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import { PiList } from "react-icons/pi";

const NavigationTab = () => {
  return(
    <Container>
      <Category>
        <PiList size="24"/>
        <CategoryText>카테고리</CategoryText>
      </Category>

      <NavMenuContainer>
        <NavMenuBtn>신상품</NavMenuBtn>
        <NavMenuBtn>베스트</NavMenuBtn>
        <NavMenuBtn>알뜰쇼핑</NavMenuBtn>
        <NavMenuBtn>특가/혜택</NavMenuBtn>
      </NavMenuContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 0px auto;
  width: 1050px;
  margin-top: 25px;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
`;
const CategoryText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${palette.black33};
  margin-left: 12px;
  padding-top: 3px;
  cursor: pointer;
`;

const NavMenuContainer = styled.div`
  display: flex;
  margin: 0px auto;
  align-items: center;
`;
const NavMenuBtn = styled.div`
  width: 150px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${palette.black33};
  cursor: pointer;
`;

export default NavigationTab;