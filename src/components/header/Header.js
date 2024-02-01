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
      {/*<AddressTooltip>배송지를 등록하고<br/>구매 가능한 상품을 확인하세요!</AddressTooltip>*/}
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
  display: block;
  position: absolute;
  
  background-color: ${palette.white};
  border: ${palette.grayDD} solid 1px;
  font-size: 14px;
  font-weight: 500;
  height: auto;
  width: max-content;
  padding: 10px;
  z-index: 100;
  transform: translate(-44%, 110%);

  :after{
    content: '';
    position: absolute;
    width: 36px;
    height: 36px;
    z-index: 100;
    top: 0px;
    left: 0px;
  }

`;


export default Header;