import React from "react";
import {
  BoxText,
  Checkbox,
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
      <h4>Фильтер</h4>
      <Line />
      <SectionTitle>Сортировать</SectionTitle>
      <Select name="filter-type" id="filter-1">
        <option value="volvo">По умолчанию</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </Select>
      <Line />
      <Section>
        <SectionTitle>Пол</SectionTitle>
        <ChoiceContainer>
          <Checkbox type="checkbox" />
          <BoxText>Мужчина</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <Checkbox type="checkbox" />
          <BoxText>Женщина</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <Checkbox type="checkbox" />
          <BoxText>Унисекс</BoxText>
        </ChoiceContainer>
      </Section>
      <Section>
        <SectionTitle>Дети</SectionTitle>
        <ChoiceContainer>
          <Checkbox type="checkbox" />
          <BoxText>Мальчики</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <Checkbox type="checkbox" />
          <BoxText>Девочки</BoxText>
        </ChoiceContainer>
      </Section>
      <Line />
      <Section>
        <SectionTitle>Категория</SectionTitle>
        <ChoiceContainer>
          <Checkbox type="checkbox" />
          <BoxText>Термобелье</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <Checkbox type="checkbox" />
          <BoxText>Фитнес и бег</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <Checkbox type="checkbox" />
          <BoxText>Нижнее белье</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <Checkbox type="checkbox" />
          <BoxText>Аксессуары</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <Checkbox type="checkbox" />
          <BoxText>Новинки</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <Checkbox type="checkbox" />
          <BoxText>Распродажа</BoxText>
        </ChoiceContainer>
      </Section>
      <Line />
      <Section>
        <SectionTitle>Цвет</SectionTitle>
        <ChoiceContainer>
          <Checkbox type="checkbox" />
          <BoxText>Черный</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <Checkbox type="checkbox" />
          <BoxText>Белый</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <Checkbox type="checkbox" />
          <BoxText>Красный</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <Checkbox type="checkbox" />
          <BoxText>Зелёный</BoxText>
        </ChoiceContainer>
      </Section>
      <Line />
      <Section>
        <SectionTitle>Фирма</SectionTitle>
        <ChoiceContainer>
          <Checkbox type="checkbox" />
          <BoxText>Первая</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <Checkbox type="checkbox" />
          <BoxText>Вторая</BoxText>
        </ChoiceContainer>
        <ChoiceContainer>
          <Checkbox type="checkbox" />
          <BoxText>Третья</BoxText>
        </ChoiceContainer>
      </Section>
    </Container>
  );
};

export default Filter;
