// MD의 추천
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

const MDRecommend = () => {
  return (
    <Container>
      <Title>MD의 추천</Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: static;
  width: 100%;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  font-size: 25px;
  color: ${palette.black33};
  font-weight: 600;
  text-align: center;
`;

export default MDRecommend;