import React from "react";
import styled from "styled-components";
import palette from "../styles/colorPalette";

const Home = () => {
  return (
    <Container>
      홈
    </Container>
  );
}

const Container = styled.div`
  display: block;
  position: relative;
  height: max-content;
  background-color: ${palette.white};
`;

export default Home;