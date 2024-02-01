// 메뉴 탭
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import { PiList } from "react-icons/pi";
import CategoryMenu from "./CategoryMenu";

const NavigationTab = () => {
  const [isCategoryHover, setCategoryHover] = useState(false);

  return(
    <Container>
      <NavContainer>
        {isCategoryHover ?
          <CategorySelect
            onMouseOver={() => {setCategoryHover(true)}}
            onMouseOut={() => {setCategoryHover(false)}}>
            <PiList size="24"/>
            <CategoryText>카테고리</CategoryText>
          </CategorySelect>
        :
          <CategoryUnselect
            onMouseOver={() => {setCategoryHover(true)}}
            onMouseOut={() => {setCategoryHover(false)}}>
            <PiList size="24"/>
            <CategoryText>카테고리</CategoryText>
          </CategoryUnselect>
        }

        <NavMenuContainer>
          <NavMenuBtn><NavMenuText>신상품</NavMenuText></NavMenuBtn>
          <NavMenuBtn><NavMenuText>베스트</NavMenuText></NavMenuBtn>
          <NavMenuBtn><NavMenuText>알뜰쇼핑</NavMenuText></NavMenuBtn>
          <NavMenuBtn><NavMenuText>특가/혜택</NavMenuText></NavMenuBtn>
        </NavMenuContainer>

        <NoticeContainer>
          <NotiveHighlight>샛별·하루 </NotiveHighlight>배송안내
        </NoticeContainer>
      </NavContainer>
      
      {/* 카테고리 hover 시 보여지는 선택 리스트 */}
      {isCategoryHover ?
        <CategoryContainer
          onMouseOver={() => {setCategoryHover(true)}}
          onMouseOut={() => {setCategoryHover(false)}}>
          <CategoryMenu />
        </CategoryContainer>
        : null
      }

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 0px auto;
  width: 1050px;
  position: relative;
`;
const NavContainer = styled.div`
  display: flex;
  width: 1050px;
  padding-top: 10px;
  height: 50px;
  align-items: center;
`;
const CategoryContainer = styled.div`
  position: absolute;
  left: 3px;
  top: 60px;
`;

const CategoryUnselect = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  cursor: default;
  color: ${palette.black33};
`;
const CategorySelect = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  cursor: default;
  color: ${palette.mainColor};
`;
const CategoryText = styled.div`
  font-size: 16px;
  font-weight: 600;
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
  align-items: center;

  :hover {
    color: ${palette.mainColor};
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3.5px;
  }
`;
const NavMenuText = styled.div`
  width: fit-content;
  font-size: 16px;
  font-weight: 600;
  color: ${palette.black33};
  cursor: pointer;
  margin: auto;
`;

const NoticeContainer = styled.div`
  display: flex;
  height: 32px;
  box-sizing: border-box;
  padding: 6px 16px;
  border: 1px solid ${palette.grayEE};
  border-radius: 18px;
  line-height: 16px;
  color: ${palette.gray66};
  font-size: 13px;
  cursor: pointer;
  align-items: center;
`;
const NotiveHighlight = styled.div`
  color: ${palette.mainColor};
  font-weight: 600;
  margin-right: 4px;
`;

export default NavigationTab;