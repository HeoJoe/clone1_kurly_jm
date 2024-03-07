// 메뉴 탭
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import { PiList } from "react-icons/pi";
import CategoryMenu from "./CategoryMenu";

const NavigationTab = () => {
  const [isCategoryHover, setCategoryHover] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }

  useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
  });

  return(
    <Container>
      {scrollPosition < 146 ?
        <>
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

        </>
      :
        <>
          <ChangeNavContainer>
            <ChangeNavContent>
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

              <ChangeNavMenuContainer>
                <ChangeNavMenuBtn><NavMenuText>신상품</NavMenuText></ChangeNavMenuBtn>
                <ChangeNavMenuBtn><NavMenuText>베스트</NavMenuText></ChangeNavMenuBtn>
                <ChangeNavMenuBtn><NavMenuText>알뜰쇼핑</NavMenuText></ChangeNavMenuBtn>
                <ChangeNavMenuBtn><NavMenuText>특가/혜택</NavMenuText></ChangeNavMenuBtn>
              </ChangeNavMenuContainer>

            </ChangeNavContent>
          </ChangeNavContainer>

          {/* 카테고리 hover 시 보여지는 선택 리스트 */}
          {isCategoryHover ?
            <ChangeCategoryContainer
              onMouseOver={() => {setCategoryHover(true)}}
              onMouseOut={() => {setCategoryHover(false)}}>
              <CategoryMenu />
            </ChangeCategoryContainer>
            : null
          }

        </>
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

const ChangeCategoryContainer = styled.div`
  position: absolute;
  top: 56px;
  position: fixed;
  z-index: 301;
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

const ChangeNavMenuContainer = styled.div`
  display: flex;
  margin: 0px auto;
  align-items: center;
  margin-left: 60px;
`;
const ChangeNavMenuBtn = styled.div`
  width: 150px;
  align-items: center;
  flex: 0 0 120px;

  :hover {
    color: ${palette.mainColor};
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3.5px;
  }
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

const ChangeNavContainer = styled.div`
  min-width: 1050px;
  width: 100%;
  letter-spacing: -0.3px;
  background-color: ${palette.white};
  box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 4px 0px;
  position: fixed;
  z-index: 301;
  top: 0px;
  left: 0px;
`;
const ChangeNavContent = styled.div`
  position: relative;
  display: flex;
  width: 1050px;
  height: 56px;
  margin: 0px auto;
  align-items: center;
`;

export default NavigationTab;