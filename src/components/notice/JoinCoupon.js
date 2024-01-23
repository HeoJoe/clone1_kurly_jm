// 가입 쿠폰 알림
import React from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import { BsXLg } from "react-icons/bs";

const JoinCoupon = () => {
  return (
    <Container>
      <Contents>
        <CouponText>지금 가입하고, <b>1만원 할인 쿠폰</b> 받아가세요!</CouponText>
        <CloseCoupon>
          <BsXLg size="20" color={palette.white} />
        </CloseCoupon>
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: ${palette.mainColor};
`;

const Contents = styled.div`
  display: flex;
  margin: 0px auto;
  width: 1050px;
`;

const CouponText = styled.div`
  width: 100%;
  color: ${palette.white};
  font-size: 14px;
  padding: 11px 0px;
  text-align: center;
  cursor: pointer;
`;
const CloseCoupon = styled.div`
  margin: auto;
  cursor: pointer;
`;

export default JoinCoupon;