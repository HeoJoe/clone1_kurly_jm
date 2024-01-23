import React from 'react';
import styled from "styled-components";
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
        <JoinCoupon />

        <UserMenu />
        <Header />
        <NavigationTab />

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