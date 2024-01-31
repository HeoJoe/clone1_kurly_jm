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
  const categories = [{"unselectIcon": BakeryIconUnselect, "selectIcon": BakeryIconSelect, "title": "베이커리",
                        "subCategories": ["잼·스프레드", "식빵·모닝빵·베이글", "간식빵", "타르트·파이", "디저트", "케이크"]},
                      {"unselectIcon": RecommendIconUnselect, "selectIcon": RecommendIconSelect, "title": "컬리의 추천",
                        "subCategories": ["홈캉스", "식단관리", "간편한 아침식사", "재구매 BEST", "3천원의 행복", "컬리마트", "대용량 상품", "캠핑", "1인 가구", "비건", "베이커리 맛집", "오프라인 맛집", "컬리가 만든 상품", "Kurly Only", "KF365 / KS365", "희소가치 프로젝트"]}];                        
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