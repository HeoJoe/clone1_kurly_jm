// MD의 추천 > 상품 아이템
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import { BsCart2 } from "react-icons/bs";

const MDRecommendItem = ({ product }) => {
  return(
    <Container>
      <ThumbnailImg
        src={product.thumbnail}/>
      <ShoppingBasket>
        <BasketIcon>
          <BsCart2 size="18"/>
        </BasketIcon>
        담기
      </ShoppingBasket>
    </Container>
  );
}

const Container = styled.div`
  display: block;
  width: 249px;
  margin-right: 18px
`;

const ThumbnailImg = styled.img`
  width: 249px;
  object-fit: cover;
  border-radius: 4px;
`;
const ShoppingBasket = styled.div`
  display: flex;
  font-size: 16px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 246px;
  height: 36px;
  margin-top: 6px;
  padding-bottom: 1px;
  border: 1px solid ${palette.grayDD};
  border-radius: 4px;
`;
const BasketIcon = styled.div`
  margin: 1px 5px 0px 0px;
`;

export default MDRecommendItem;