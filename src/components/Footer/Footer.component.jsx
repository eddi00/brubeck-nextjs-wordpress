import Link from "next/link";
import React from "react";
import {
  AddressIcon,
  Grid,
  Layout,
  Line,
  Logo,
  PhoneIcon,
  Site,
  Text,
  Wrapper,
} from "./Footer.styles";

const Footer = ({ data }) => {
  return (
    <Layout>
      <Grid>
        <Logo>BRUBECK</Logo>
        <div>
          <h5>Карта сайта</h5>
          <Line />
          <Link href="/">
            <Site>Главная</Site>
          </Link>
          <Link href="/">
            <Site>О нас</Site>
          </Link>
          <Link href="/">
            <Site>Доставка</Site>
          </Link>
          <Link href="/">
            <Site>Оплата</Site>
          </Link>
        </div>
        <div>
          <h5>Магазин</h5>
          <Line />
          <Link href="/">
            <Site>Комплекты термобелья</Site>
          </Link>
          <Link href="/">
            <Site>Мужчинам</Site>
          </Link>
          <Link href="/">
            <Site>Женщинам</Site>
          </Link>
          <Link href="/">
            <Site>Детям</Site>
          </Link>
          <Link href="/">
            <Site>Подросткам</Site>
          </Link>
          <Link href="/">
            <Site>Нижнее белье</Site>
          </Link>
          <Link href="/">
            <Site>Мотоколлекция</Site>
          </Link>
          <Link href="/">
            <Site>Для фитнеса и бега</Site>
          </Link>
          <Link href="/">
            <Site>Велоколлекция</Site>
          </Link>
          <Link href="/">
            <Site>Аксессуары</Site>
          </Link>
          <Link href="/">
            <Site>Распродажа</Site>
          </Link>
          <Link href="/">
            <Site>Новинки</Site>
          </Link>
        </div>
        <div>
          <h5>Контакты</h5>
          <Line />
          <Wrapper>
            <PhoneIcon size="20" />
            <Text>{data.header_first_tel_number}</Text>
          </Wrapper>
          <Wrapper>
            <AddressIcon size="28" />
            <Text>{data.header_address}</Text>
          </Wrapper>
        </div>
      </Grid>
    </Layout>
  );
};

export default Footer;
