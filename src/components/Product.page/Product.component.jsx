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

const Product = ({ product, colorTable }) => {
  return (
    <Layout>
      <Link href="/shop">
        <GoBackButton>Вернутся в магазин</GoBackButton>
      </Link>
      <TopSection>
        <Images images={product.images} />
        <Details product={product} colorTable={colorTable} />
      </TopSection>
      <Description>
        <DescriptionTitle>Описание и характеристики</DescriptionTitle>
        <DescriptionContent
          dangerouslySetInnerHTML={{ __html: product.renderedPost }}
        />
      </Description>
    </Layout>
  );
};

export default Product;
