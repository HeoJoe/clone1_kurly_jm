import React from "react";
import styled from "styled-components";
import palette from "../styles/colorPalette";

import AdvertiseSlide from "../components/home/AdvertiseSlide";

const Home = () => {
  return (
    <Container>
      <AdvertiseSlide />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  height: max-content;
  background-color: ${palette.white};
`;

export default Home;