import React from "react";
import styled from "styled-components";
import palette from "../styles/colorPalette";

import AdvertiseSlide from "../components/home/AdvertiseSlide";
import MDRecommend from "../components/home/MDRecommend";

const Home = () => {
  return (
    <Container>
      <AdvertiseSlide />
      <MDRecommend />
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