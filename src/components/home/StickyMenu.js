// 고정된 메뉴
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import ImgDelivery from "../../contents/img_sticky_delivery.jpg";

const StickyMenu = () => {

  return(
    <Container>
      <MenuContainer>
        <DeliveryImg
          src={ImgDelivery}/>

        <SubMenu>
          <SubBtn>등급별 혜택</SubBtn>
          <SubBtn>레시피</SubBtn>
        </SubMenu>
      </MenuContainer>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 516px;
  right: 20px;
  bottom: 0px;
  z-index: 1;
  margin-top: 206px;
`;

const MenuContainer = styled.div`
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  width: 80px;
  font-size: 12px;
  line-height: 16px;
  color: ${palette.black33};
  letter-spacing: -0.3px;
`;

const DeliveryImg = styled.img`
  display: block;
  max-width: 100%;
  width: initial;
  height: 120px;
  margin-bottom: 7px;
  cursor: pointer;
`;

const SubMenu = styled.div`
  width: 80px;
  border-width: 1px 1px 0px;
  border-top-style: solid;
  border-right-style: solid;
  border-left-style: solid;
  border-top-color: ${palette.grayDD};
  border-right-color: ${palette.grayDD};
  border-left-color: ${palette.grayDD};
  border-image: initial;
  border-bottom-style: initial;
  border-bottom-color: initial;
  background-color: ${palette.white};
`;
const SubBtn = styled.div`
  padding: 5px 0px;
  text-align: center;
  border-bottom: 1px solid ${palette.grayDD};
  cursor: pointer;
`;

export default StickyMenu;