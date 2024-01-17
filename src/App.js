import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "./styles/App.css";

import Home from './page/Home';
import JoinCoupon from './components/notice/JoinCoupon';

const App = () => {
  return(
    <BrowserRouter>
      <JoinCoupon />
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