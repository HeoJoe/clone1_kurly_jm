// 헤더
import React from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import logo from "../../contents/ic_kurly.svg";

import { CgSearch } from "react-icons/cg";

const Header = () => {
  return(
    <Container>
      <Logo src={logo} />

      <Kurlys>
        <MarketKurly>마켓컬리</MarketKurly>
        <KurlyLine />
        <BeautyKurly>뷰티컬리</BeautyKurly>
      </Kurlys>

      <SearchContainter>
        <SearchInput
          type="text"
          placeholder="검색어를 입력해주세요"/>
        <SearchBtn>
          <CgSearch size="20" color={palette.mainColor} />
        </SearchBtn>
        
      </SearchContainter>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 0px auto;
  width: 1050px;
`;

const Logo = styled.img`
  width: 80px;
`;

const Kurlys = styled.div`
  display: flex;
  margin: auto 0px;
`;
const MarketKurly = styled.div`
  color: ${palette.mainColor};
  font-size: 18px;
  cursor: pointer;
  font-weight: 600;
  margin-left: 20px;
`;
const BeautyKurly = styled.div`
  color: ${palette.grayB5};
  font-size: 18px;
  cursor: default;
  font-weight: 500;
`;
const KurlyLine = styled.div`
  width: 1px;
  height: 14px;
  margin: auto 11px;
  background: ${palette.grayE2};
`;

const SearchContainter = styled.div`
  display: flex;
  margin-left: 60px;
  border-radius: 5px;
  border: 1px solid ${palette.mainColor};
`;
const SearchInput = styled.input`
  border: none;
  width: 300px;
  margin: 12px;
  font-size: 15px;
  font-weight: 500;
  color: ${palette.black};

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${palette.grayA3};
  }
`;
const SearchBtn = styled.div`
  margin: 11px 12px 4px 0px;
  cursor: pointer;
`;

export default Header;