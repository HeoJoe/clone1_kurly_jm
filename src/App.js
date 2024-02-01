import React from 'react';
import styled from "styled-components";
import palette from "./styles/colorPalette";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "./styles/App.css";

import Home from './page/Home';
import JoinCoupon from './components/notice/JoinCoupon';
import UserMenu from './components/header/UserMenu';
import Header from './components/header/Header';
import NavigationTab from './components/header/NavigationTab';

const App = () => {
  return(
    <BrowserRouter>
      <Container>
        <HeaderContainer>
          <JoinCoupon />

          <UserMenu />
          <Header />
          <NavigationTab />
        </HeaderContainer>

        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

const Container = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
  position: relative;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 190px;
  position: absolute;
  margin-bottom: 10px;
  box-shadow: 0px 1px 2px 1px ${palette.grayC4};
  z-index: 100;
`;

export default App;

/*
https://react-icons.github.io/react-icons

드래그 방지
-webkit-user-select: none;
-moz-user-select: none;
-ms-use-select: none;
user-select: none;

드래그 허용
-webkit-user-select: all;
-moz-user-select: all;
-ms-use-select: all;
user-select: all;
*/