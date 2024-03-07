// MD의 추천 > 상품 아이템
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import { BsCart2 } from "react-icons/bs";
import { LiaCommentDots } from "react-icons/lia";

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

      <ProductName>{product.productName}</ProductName>
      <OriginalPrice>{product.originalPrice}</OriginalPrice>

      <DiscountBox>
        <DiscountPercent>{product.discount}</DiscountPercent>
        <DiscountPrice>{product.discountPrice}</DiscountPrice>
      </DiscountBox>

      <CommentBox>
        <LiaCommentDots size="17"/>
        <CommentCnt>{product.commentCnt}</CommentCnt>
      </CommentBox>

    </Container>
  );
}

const Container = styled.div`
  display: block;
  width: 249px;
  margin-right: 18px;
  cursor: pointer;
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

const ProductName = styled.div`
  font-size: 17px;
  line-height: 23px;
  font-weight: 400;
  margin-top: 8px;
  margin-bottom: 8px;
  overflow: hidden;
`;
const OriginalPrice = styled.div`
  display: block;
  padding-top: 1.5px;
  color: ${palette.grayB5};
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  text-decoration: line-through;
`;

const DiscountBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const DiscountPercent = styled.div`
  font-size: 16px;
  font-weight: 800;
  line-height: 1.5;
  white-space: nowrap;
  margin-right: 7px;
  color: ${palette.redDiscount};
`;
const DiscountPrice = styled.div`
  font-size: 16px;
  font-weight: 800;
  line-height: 1.5;
  white-space: nowrap;
  box-sizing: border-box;
  color: ${palette.black33};
`;

const CommentBox = styled.div`
  display: flex;
  color: ${palette.gray99};
  padding-top: 6px;
  font-size: 13px;
  line-height: 20px;
`;
const CommentCnt = styled.div`
  padding-left: 2px;
  font-weight: 400;
`;

export default MDRecommendItem;