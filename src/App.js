import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "./styles/App.css";

import Home from './page/Home';
import JoinCoupon from './components/notice/JoinCoupon';
import UserMenu from './components/header/UserMenu';
import Header from './components/header/Header';

const App = () => {
  return(
    <BrowserRouter>
      <JoinCoupon />

      <UserMenu />
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

/*
https://react-icons.github.io/react-icons
*/