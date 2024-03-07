// MD의 추천
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import MdRecommendData from "../../contents/mdRecommendJson.json";
import MDRecommendItem from "./MDRecommendItem";


const MDRecommend = () => {
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
                      
  const [selectCategory, setSelectCategory] = useState(getRandom(0, 22));

  useEffect(() => {
  }, [selectCategory]);

  

  return (
    <Container>
      <Title>MD의 추천</Title>

      <CategoryList>
        {MdRecommendData.map((recommend, idx) =>
          <>
            {idx == selectCategory ?
                <CategorySelectBtn
                  key={idx}
                  onClick={() => setSelectCategory(idx)}>
                  {recommend.category}
                </CategorySelectBtn>
            :
              <CategoryBtn
                key={idx}
                onClick={() => setSelectCategory(idx)}>
                {recommend.category}
              </CategoryBtn>
            }
          </>
        )}
      </CategoryList>

      <MDRecommendList>
        {MdRecommendData[selectCategory].products.map((product, idx) =>
          <MDRecommendItem
            key={idx}
            product={product}/>
        )}
      </MDRecommendList>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  width: 1050px;
  margin: 36px auto 0px auto;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  font-size: 28px;
  color: ${palette.black33};
  font-weight: 600;
  text-align: center;
  margin: 0px auto 25px auto;
`;
const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  place-content: center;
  margin: 0px 20px;
`;
const CategoryBtn = styled.div`
  display: flex;
  border-radius: 22px;
  font-size: 14.5px;
  background: ${palette.grayF7};
  color: ${palette.black33};
  padding: 10px 20px;
  margin: 0px 5px 20px 5px;
  cursor: pointer;

  &:hover {
    background: ${palette.lightMain};
    color: ${palette.mainColor};
  }
`;
const CategorySelectBtn = styled.div`
  display: flex;
  border-radius: 22px;
  font-size: 14px;
  background: ${palette.mainColor};
  color: ${palette.white};
  padding: 10px 20px;
  margin: 0px 5px 20px 5px;
  cursor: pointer;
`;

const MDRecommendList = styled.div`
  display: flex;
  position: relative;
  width: 1050px;
  margin: 20px auto 27px auto;
  flex-direction: row;
  overflow: hidden;
`;

export default MDRecommend;