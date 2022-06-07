import { useRouter } from "next/router";
import React from "react";
// import { CheckBox } from "./Filter.logic";
import { useSelector } from "react-redux";

import { returnCategoryRuName } from "../../Utils/returnCategoryRuName";
import { returnColorRuName } from "../../Utils/returnColorRuName";
import { CheckBox } from "./Filter.logic";
import {
  BoxText,
  ChoiceContainer,
  Container,
  Line,
  Section,
  SectionTitle,
  Select,
} from "./Filter.styles";

const Filter = () => {
  const filterByGender = useSelector(state => state.shop.filterByGender);
  const filterByCategory = useSelector(state => state.shop.filterByCategory);
  const filterByColor = useSelector(state => state.shop.filterByColor);
  const filterBySize = useSelector(state => state.shop.filterBySize);

  return (
    <Container>
      <h4>Фильтр</h4>
      <Line />
      <SectionTitle>Сортировать</SectionTitle>
      <Select name="filter-type" id="filter-1">
        <option value="volvo">По умолчанию</option>
        <option value="saab">1</option>
        <option value="mercedes">2</option>
        <option value="audi">3</option>
      </Select>
      <Line />
      <Section>
        <SectionTitle>Пол</SectionTitle>
        <ChoiceContainer>
          <CheckBox name="gen-men" checked={filterByGender.men.checked} />
          <BoxText>Мужчина ({filterByGender.men.count})</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <CheckBox name="gen-women" checked={filterByGender.women.checked} />
          <BoxText>Женщина ({filterByGender.women.count})</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <CheckBox name="gen-unisex" checked={filterByGender.unisex.checked} />
          <BoxText>Унисекс ({filterByGender.unisex.count})</BoxText>
        </ChoiceContainer>
      </Section>
      <Section>
        <SectionTitle>Дети</SectionTitle>
        <ChoiceContainer>
          <CheckBox name="gen-boys" checked={filterByGender.boys.checked} />
          <BoxText>Мальчики ({filterByGender.boys.count})</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <CheckBox name="gen-girls" checked={filterByGender.girls.checked} />
          <BoxText>Девочки ({filterByGender.girls.count})</BoxText>
        </ChoiceContainer>
      </Section>
      <Line />
      <Section>
        <SectionTitle>Категории белья</SectionTitle>
        {Object.entries(filterByCategory).map(([key, item], index) => (
          <ChoiceContainer key={index}>
            <CheckBox name={"cat-" + key} checked={item.checked} />
            <BoxText>
              {returnCategoryRuName(key)} ({item.count})
            </BoxText>
          </ChoiceContainer>
        ))}
      </Section>
      <Line />
      <Section>
        <SectionTitle>Цвет</SectionTitle>
        {Object.entries(filterByColor).map(([key, item], index) => (
          <ChoiceContainer key={index}>
            <CheckBox name={"color-" + key} checked={item.checked} />
            <BoxText>
              {returnColorRuName(key)} ({item.count})
            </BoxText>
          </ChoiceContainer>
        ))}
      </Section>
      <Line />
      <Section>
        <SectionTitle>Размер</SectionTitle>
        {Object.entries(filterBySize).map(([key, item], index) => (
          <ChoiceContainer key={index}>
            <CheckBox name={"size-" + key} checked={item.checked} />
            <BoxText>
              {key} ({item.count})
            </BoxText>
          </ChoiceContainer>
        ))}
      </Section>
      <Line />
      <Section>
        <SectionTitle>Фирма</SectionTitle>
        <ChoiceContainer>
          <CheckBox name="cat-company1" />
          <BoxText>Первая</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <CheckBox name="cat-company2" />
          <BoxText>Вторая</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <CheckBox name="cat-company3" />
          <BoxText>Третья</BoxText>
        </ChoiceContainer>
      </Section>
    </Container>
  );
};

export default Filter;
