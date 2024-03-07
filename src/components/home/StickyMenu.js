// 고정된 메뉴
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import ImgDelivery from "../../contents/img_sticky_delivery.jpg";

import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const StickyMenu = () => {
  const productImgs = ["https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=120,height=156,quality=85/product/image/c81065a4-6736-4a9e-b260-d32d789c1d97.jpg",
                      "https://3p-image.kurly.com/cdn-cgi/image/fit=crop,width=120,height=156,quality=85/files/20240109/6018f781-c173-4d8d-81f6-5519d1577851.jpg",
                      "https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=120,height=156,quality=85/product/image/47c2c4cf-d25b-4188-bd92-1a006e37413e.jpg"];

  return(
    <Container>
      <MenuContainer>
        <DeliveryImg
          src={ImgDelivery}/>

        <SubMenu>
          <SubBtn>등급별 혜택</SubBtn>
          <SubBtn>레시피</SubBtn>
        </SubMenu>

        <ViewProductContainer>
          <MdKeyboardArrowUp size="18" color={palette.grayDD} />
          최근 본 상품
          <ProductList>
            {productImgs.map((image, idx) => 
              <ProductImg
                key={idx}
                src={image}/>
            )}
          </ProductList>
          <MdKeyboardArrowDown size="18" color={palette.black33} />
        </ViewProductContainer>
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

const ViewProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
  border: 1px solid ${palette.grayDD};
  background-color: ${palette.white};
  text-align: center;
  font-weight: 600;
`;
const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 209px;
  overflow: hidden;
  margin-top: 6px;
`;
const ProductImg = styled.img`
  box-sizing: border-box;
  display: block;
  width: initial;
  height: 80px;
  margin: 2px;
  max-width: 100%;
`;

export default StickyMenu;