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
  const [selectSubCategory, setSelectSubCategory] = useState(-1);

  const recommendCoverUrl1 = "/recommendCover/img_category_recommend_cover_";
  const recommendCoverUrl2 = ".webp";
  
  return(
    <Container>
      {/* 상위 카테고리 */}
      <UpperContainer>
        {categories.map((category, idx) => {
          return (
            <CategoryBtn
              key={idx}
              onMouseOver={() => {setSelectCategory(idx); setSelectSubCategory(-1);}}
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
      </UpperContainer>
      
      {/* 기본 하위 카테고리 */}
      {selectCategory != -1 && selectCategory != categories.length - 1 ?
        <SubContainer>
          {categories[selectCategory].subCategories.map((subCategory, idx) => 
            <SubCategoryBtn
              key={idx}
              onMouseOver={() => {setSelectCategory(selectCategory); setSelectSubCategory(idx);}}
              onMouseOut={() => {setSelectCategory(-1); setSelectSubCategory(-1);}}>
              {selectSubCategory == idx ?
                <SubCategoryTextSelect>{subCategory}</SubCategoryTextSelect>
              :
                <SubCategoryText>{subCategory}</SubCategoryText>
              }
            </SubCategoryBtn>
          )}
        </SubContainer>
        : null
      }

      {/* 컬리의 추천 하위 카테고리 */}
      {selectCategory == categories.length - 1 ?
        <RecommendContainer>
          {categories[selectCategory].subCategories.map((subCategory, idx) => 
            <RecommendCategoryBtn
              key={idx}
              onMouseOver={() => {setSelectCategory(selectCategory); setSelectSubCategory(idx);}}
              onMouseOut={() => {setSelectCategory(-1); setSelectSubCategory(-1);}}>
              <RecommendCover src={`${process.env.PUBLIC_URL}${recommendCoverUrl1}${idx + 1}${recommendCoverUrl2}`}/>
              {selectSubCategory == idx ?
                <SubCategoryTextSelect>{subCategory}</SubCategoryTextSelect>
              :
                <SubCategoryText>{subCategory}</SubCategoryText>
              }
            </RecommendCategoryBtn>
          )}
        </RecommendContainer>
        :null
      }
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: absolute;
  z-index: 1000;
`;

const UpperContainer = styled.div`
  display: flex;
  width: 250px;
  background: ${palette.white};
  border: 1px solid ${palette.grayDD};
  flex-direction: column;

  :hover {
    background: ${palette.grayEE};
  }
`;
const SubContainer = styled.div`
  display: flex;
  min-width: 250px;
  background: ${palette.grayEE};
  border: 1px solid ${palette.grayDD};
  flex-direction: column;
`;
const RecommendContainer = styled.div`
  display: flex;
  width: 520px;
  padding: 16px 16px 0px 16px;
  background: ${palette.grayEE};
  border: 1px solid ${palette.grayDD};
  flex-wrap: wrap;
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
const SubCategoryBtn = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  padding: 0px 14px;
  cursor: pointer;
`;
const SubCategoryText = styled.div`
  font-size: 14px;
  color: ${palette.black};
`;
const SubCategoryTextSelect = styled.div`
  font-size: 14px;
  color: ${palette.mainColor};
  font-weight: 600;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3.5px;
`;
const RecommendCategoryBtn = styled.div`
  display: flex;
  height: 160px;
  padding: 0px 5px;
  cursor: pointer;
  flex-direction: column;
`;
const RecommendCover = styled.img`
  width: 120px;
  margin-bottom: 10px;
`;

export default CategoryMenu;