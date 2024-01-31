// 카테고리 메뉴 탭
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import BakeryIconUnselect from "../../contents/ic_category_bakery_unselect.png";
import BakeryIconSelect from "../../contents/ic_category_bakery_select.webp";
import RecommendIconUnselect from "../../contents/ic_category_recommend_unselect.png";
import RecommendIconSelect from "../../contents/ic_category_recommend_select.webp";

const CategoryMenu = () => {
  const categories = [{"unselectIcon": BakeryIconUnselect, "selectIcon": BakeryIconSelect, "title": "베이커리"},
                      {"unselectIcon": RecommendIconUnselect, "selectIcon": RecommendIconSelect, "title": "컬리의 추천"}];
  const [selectCategory, setSelectCategory] = useState(-1);
  
  return(
    <Container>
      {categories.map((category, idx) => {
        return (
          <CategoryBtn
            key={idx}
            onMouseOver={() => {setSelectCategory(idx)}}
            onMouseOut={() => {setSelectCategory(-1)}}>
            {idx == selectCategory ? 
              <>
              <CategoryIcon
                src={category.selectIcon}/>
              <CategoryTextSelect>{category.title}</CategoryTextSelect>
              </>
            :
              <>
              <CategoryIcon
                src={category.unselectIcon}/>
              <CategoryText>{category.title}</CategoryText>
              </>
            }
            
            
          </CategoryBtn>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: absolute;
  width: 250px;
  background: ${palette.white};
  border: 1px solid ${palette.grayDD};
  flex-direction: column;
  z-index: 1000;
  
  :hover {
    background: ${palette.grayEE};
  }
`;

const CategoryBtn = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  padding: 0px 12px;
  cursor: pointer;
`;
const CategoryIcon = styled.img`
  width: 24px;
  margin-right: 8px;
`;
const CategoryText = styled.div`
  font-size: 14px;
  color: ${palette.black};
`;
const CategoryTextSelect = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${palette.mainColor};
`;

export default CategoryMenu;