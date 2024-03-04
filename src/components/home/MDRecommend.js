// MD의 추천
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

const MDRecommend = () => {
  const categories = ["간편식·밀키트·샐러드", "과일·견과·쌀", "국·반찬·메인요리", "헤어·바디·구강", "정육·가공육·계란", "생수·음료", "커피·차", "베이커리", "스킨케어·메이크업", "채소",
                      "수산·해산·건어물", "생활용품·리빙", "면·양념·오일", "주방용품", "간식·과자·떡", "전통주", "가전제품", "가구·인테리어", "건강식품", "유아동", "와인·위스키",
                      "반려동물", "패션잡화"];
  
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
                      
  const [selectCategory, setSelectCategory] = useState(categories[getRandom(0, 22)]);

  useEffect(() => {
  }, [selectCategory]);

  return (
    <Container>
      <Title>MD의 추천</Title>

      <CategoryList>
        {categories.map((category, idx) =>
          <>
            {category == selectCategory ?
              <CategorySelectBtn
                key={idx}
                onClick={() => setSelectCategory(category)}>
                {category}
              </CategorySelectBtn>
            :
              <CategoryBtn
                key={idx}
                onClick={() => setSelectCategory(category)}>
                {category}
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