import React from "react";
import { CheckBox } from "./Filter.logic";
import {
  BoxText,
  CheckboxInput,
  ChoiceContainer,
  Container,
  Line,
  Section,
  SectionTitle,
  Select,
} from "./Filter.styles";

const Filter = () => {
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
          <CheckBox name="cat-men" />
          <BoxText>Мужчина</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <CheckBox name="cat-women" />
          <BoxText>Женщина</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <CheckBox name="cat-unisex" />
          <BoxText>Унисекс</BoxText>
        </ChoiceContainer>
      </Section>
      <Section>
        <SectionTitle>Дети</SectionTitle>
        <ChoiceContainer>
          <CheckBox name="cat-boys" />
          <BoxText>Мальчики</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <CheckBox name="cat-girls" />
          <BoxText>Девочки</BoxText>
        </ChoiceContainer>
      </Section>
      <Line />
      <Section>
        <SectionTitle>Категория</SectionTitle>
        <ChoiceContainer>
          <CheckBox name="cat-thermal-underware" />
          <BoxText>Термобелье</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <CheckBox name="cat-fitness-and-running" />
          <BoxText>Фитнес и бег</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <CheckBox name="cat-underware" />
          <BoxText>Нижнее белье</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <CheckBox name="cat-accessories" />
          <BoxText>Аксессуары</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <CheckBox name="cat-new" />
          <BoxText>Новинки</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <CheckBox name="cat-sale" />
          <BoxText>Распродажа</BoxText>
        </ChoiceContainer>
      </Section>
      <Line />
      <Section>
        <SectionTitle>Цвет</SectionTitle>
        <ChoiceContainer>
          <CheckBox name="color-black" />
          <BoxText>Черный</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <CheckBox name="color-white" />
          <BoxText>Белый</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <CheckBox name="color-red" />
          <BoxText>Красный</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <CheckBox name="color-green" />
          <BoxText>Зелёный</BoxText>
        </ChoiceContainer>
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
