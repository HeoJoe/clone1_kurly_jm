import React from "react";
import styled from "styled-components";
import palette from "../styles/colorPalette";

import AdvertiseSlide from "../components/home/AdvertiseSlide";
import MDRecommend from "../components/home/MDRecommend";
import StickyMenu from "../components/home/StickyMenu";

const Home = () => {
  return (
    <Container>
      {/* 헤더 높이: 190px or 56px, 광고 슬라이드 높이: 360px =>  550px or 416px*/}
      <AdvertiseSlide />
      <MDRecommend />

      {/* 스크롤 따라다니는 Sticky 메뉴 */}
      <StickyMenu />
    </Container>
  );
}

const Container = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: max-content;
  top: 190px;
  z-index: 10;
  background-color: ${palette.white};
`;

export default Home;