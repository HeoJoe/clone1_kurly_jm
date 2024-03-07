// MD의 추천
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import MdRecommend from "../../contents/mdRecommendJson.json";


const MDRecommend = () => {
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
                      
  const [selectCategory, setSelectCategory] = useState(MdRecommend[getRandom(0, 22)].category);

  useEffect(() => {
  }, [selectCategory]);

  return (
    <Container>
      <Title>MD의 추천</Title>

      <CategoryList>
        {MdRecommend.map((recommend, idx) =>
          <>
            {recommend.category == selectCategory ?
              <CategorySelectBtn
                key={idx}
                onClick={() => setSelectCategory(recommend.category)}>
                {recommend.category}
              </CategorySelectBtn>
            :
              <CategoryBtn
                key={idx}
                onClick={() => setSelectCategory(recommend.category)}>
                {recommend.category}
              </CategoryBtn>
            }
          </>
        )}
      </CategoryList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  width: 1050px;
  margin: 0px auto;
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
  font-size: 14px;
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

export default MDRecommend;