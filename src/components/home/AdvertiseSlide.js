// 광고 슬라이드
import React from "react";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import Advertise1 from "../../contents/img_advertise_1.jpg";
import Advertise2 from "../../contents/img_advertise_2.png";
import Advertise3 from "../../contents/img_advertise_3.jpg";

const AdvertiseSlide = () => {
  const images = useRef([{ src: "https://product-image.kurly.com/cdn-cgi/image/width=1900,height=370,quality=85/banner/main/pc/img/90d88462-814b-4b58-ab7b-5af55b93a816.jpg"},
  {src: "https://product-image.kurly.com/cdn-cgi/image/width=1900,height=370,quality=85/banner/main/pc/img/20c56ca7-d335-4198-ad3a-fe717acceaa5.png"},
  {src: "https://product-image.kurly.com/cdn-cgi/image/width=1900,height=370,quality=85/banner/main/pc/img/be20a6f6-0092-4e4a-9a03-fdcde23163ab.jpg"}]);

  const imgSize = useRef(images.current.length);
  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    transform: `translateX(-${current}00vw)`
  });

  const moveSlide = (i) => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex = 0;

    setCurrent(nextIndex);
  };

  useEffect(() => {
    setStyle({ transform: `translateX(-${current}00vw)` });
    console.log(current);
  }, [current]);

  return (
    <Container>
      <AdvertiseContainter style={style}>
        {images.current.map((img, idx) => (
          <AdvertiseImg
            key={idx}
            src={img.src}
          />
        ))}
      </AdvertiseContainter>

      <SlideMoveBtns>
        <PreviousBtn onClick={() => { moveSlide(-1); }}>
          <IoIosArrowDropleftCircle size="60" />
        </PreviousBtn>
        <NextBtn onClick={() => { moveSlide(1); }}>
          <IoIosArrowDroprightCircle size="60" />
        </NextBtn>
      </SlideMoveBtns>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: max-content;
  top: 190px;
  z-index: 10;
  overflow: hidden; 
  justify-content: center;
`;

const AdvertiseContainter = styled.div`
  display: flex;
`;
const AdvertiseImg = styled.img`
  height: 360px;
  cursor: pointer;
`;

const SlideMoveBtns = styled.div`
  display: flex;
  position: absolute;
  width: 1300px;
  height: 100%;
  align-items: center;
`;
const PreviousBtn = styled.div`
  color: ${palette.black};
  opacity: 0.25;
  cursor: pointer;
`;
const NextBtn = styled.div`
  color: ${palette.black};
  opacity: 0.25;
  margin-left: auto;
  cursor: pointer;
`;

export default AdvertiseSlide;