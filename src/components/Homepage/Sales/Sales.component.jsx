import Link from "next/link";
import React from "react";
import {
  ButtonLink,
  ButtonShop,
  CartIconOutline,
  CurrencySymbol,
  HeartIconOutline,
  ImageContainer,
  Layout,
  Line,
  NoImage,
  Price,
  ProductBottom,
  ProductCard,
  ProductGrid,
  ProductImage,
  ProductName,
  Title,
} from "./Sales.styles";

const SalesHomepage = ({ products }) => {
  return (
    <Layout>
      <Title>Распродажа</Title>
      <ProductGrid>
        {products &&
          products.slice(0, 8).map((item, index) => (
            <ProductCard key={index}>
              <ImageContainer>
                {item.images.length > 0 ? (
                  <ProductImage src={item.images[0].src} layout="fill" />
                ) : (
                  <NoImage size="9rem" />
                )}
              </ImageContainer>
              <Line />
              <ProductName>{item.name}</ProductName>
              <ProductBottom>
                <Price>
                  <CurrencySymbol size="1rem" />
                  {item.price}
                </Price>
                <CartIconOutline size="1.25rem" />
              </ProductBottom>
              <HeartIconOutline size="1.25rem" />
            </ProductCard>
          ))}
      </ProductGrid>
      <Link href="/shop">
        <ButtonShop>
          <h5>ПЕРЕЙТИ В МАГАЗИН</h5>
        </ButtonShop>
      </Link>
    </Layout>
  );
};

export default SalesHomepage;
