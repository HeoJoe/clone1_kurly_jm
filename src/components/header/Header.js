// 헤더
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import logo from "../../contents/ic_kurly.svg";

import { CgSearch } from "react-icons/cg";
import { PiMapPin } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { BsXCircleFill } from "react-icons/bs";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [searchDelete, setSearchDelete] = useState(false);

  const handleInputChange = (e) => {
    let input = e.target.value;
    
    setInputSearch(input);

    if(input.length > 0) setSearchDelete(true);
    else setSearchDelete(false);
  };

  const deleteSearchText = () => {
    setInputSearch("");
    setSearchDelete(false);
  }

  useEffect(() => {
  }, [inputSearch, searchDelete]);

  return(
    <Container>
      <Logo src={logo} />

      <Kurlys>
        <MarketKurly>마켓컬리</MarketKurly>
        <KurlyLine />
        <BeautyKurly>뷰티컬리</BeautyKurly>
      </Kurlys>

      {/* 검색창 */}
      <SearchContainter>
        <SearchInput
          type="text"
          placeholder="검색어를 입력해주세요"
          value={inputSearch}
          onChange={handleInputChange}/>

        {searchDelete ?
          <SearchDeleteBtn
            onClick={deleteSearchText}>
            <BsXCircleFill size="15" color={palette.grayC4} />
          </SearchDeleteBtn>
          :
          <SearchDeleteBtnNone>
            <BsXCircleFill size="15" color={palette.transparent} />
          </SearchDeleteBtnNone>
        }
        
        <SearchBtn>
          <CgSearch size="22" color={palette.mainColor} />
        </SearchBtn>
      </SearchContainter>

      {/* 주소, 찜, 장바구니 */}
      <RightBtns>
        <Btn>
          <PiMapPin size="30"/>
        </Btn>
        <Btn>
          <GoHeart size="30"/>
        </Btn>
        <Btn>
          <BsCart2 size="30"/>
        </Btn>
      </RightBtns>

      {/* 주소 입력 안내 tooltip */}
      <AddressTooltip>
        <AddressTooltipText>
          <AddressTooltipHighligh>배송지를 등록</AddressTooltipHighligh>하고
        </AddressTooltipText>
        <AddressTooltipText>
          구매 가능한 상품을 확인하세요!
        </AddressTooltipText>

        <AddressBtns>
          <AddressLoginBtn>로그인</AddressLoginBtn>
          <AddressSearchBtn>
            <AddressSearchIcon>
              <CgSearch size="12" color={palette.white} />
            </AddressSearchIcon>
            주소 검색
          </AddressSearchBtn>
        </AddressBtns>
      </AddressTooltip>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  margin: 0px auto;
  width: 1050px;
  margin-top: 5px;
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
  margin-left: 70px;
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
const SearchDeleteBtn = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;
const SearchDeleteBtnNone = styled.div`
  display: flex;
  cursor: default;
  align-items: center;
  justify-content: center;
`;
const SearchBtn = styled.div`
  display: flex;
  margin: auto 12px auto 10px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const RightBtns = styled.div`
  display: flex;
  margin: auto 0px auto auto;
`;
const Btn = styled.div`
  margin-left: 24px;
  cursor: pointer;

  :hover {
    color: ${palette.mainColor};
  }
`;
const AddressTooltip = styled.div`
  position: absolute;
  background-color: ${palette.white};
  border: ${palette.grayDD} solid 1px;
  height: auto;
  width: max-content;
  padding: 15px 20px;
  z-index: 100;
  right: 0;
  transform: translate(-6.5%, 40%);
  
  &:after {
    border-color: ${palette.white} transparent;
    border-style: solid;
    border-width: 0 7px 10px 7px;
    content: "";
    display: block;
    left: 60%;
    transform: translateX(-50%);
    position: absolute;
    top: -9px;
    width: 0;
    z-index: 1;
  }
  &:before {
    border-color: ${palette.grayDD} transparent;
    border-style: solid;
    border-width: 0 7px 10px 7px;
    content: "";
    display: block;
    left: 60%;
    transform: translateX(-50%);
    position: absolute;
    top: -11px;
    width: 0;
    z-index: 0;
  }
`;
const AddressTooltipText = styled.div`
  font-size: 15.2px;
  font-weight: 500;
  margin: 5px 0px;
  color: ${palette.black33};
`;
const AddressTooltipHighligh = styled.div`
  display: inline;
  color: ${palette.mainColor};
`;
const AddressBtns = styled.div`
  display: flex;
  margin-top: 12px;
`;
const AddressLoginBtn = styled.div`
  font-size: 12px;
  font-weight: 500;
  padding: 8px 20px;
  color: ${palette.mainColor};
  margin-right: 5px;
  border-radius: 2px;
  border: 1px solid ${palette.mainColor};
  cursor: pointer;
`;
const AddressSearchBtn = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 500;
  padding: 8px 40px 7px 40px;
  color: ${palette.white};
  background-color: ${palette.mainColor};
  border-radius: 2px;
  border: 1px solid ${palette.mainColor};
  cursor: pointer;
`;
const AddressSearchIcon = styled.div`
  margin-right: 5px;
  margin-top: 1px;
`;

export default Header;