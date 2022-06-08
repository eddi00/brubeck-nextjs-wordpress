import Link from "next/link";
import React from "react";
import Details from "./Details/Details.component";
import Images from "./Images/Images.component";
import {
  Description,
  DescriptionContent,
  DescriptionTitle,
  GoBackButton,
  Layout,
  TopSection,
} from "./Product.styles";

const Product = ({ product }) => {
  return (
    <Layout>
      <Link href="/shop">
        <GoBackButton>Вернутся в магазин</GoBackButton>
      </Link>
      <TopSection>
        <Images images={product.images} />
        <Details product={product} />
      </TopSection>
      <Description>
        <DescriptionTitle>Описание и характеристики</DescriptionTitle>
        <DescriptionContent
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </Description>
    </Layout>
  );
};

export default Product;
