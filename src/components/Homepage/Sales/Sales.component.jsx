import Link from "next/link";
import React from "react";
import {
  ButtonShop,
  CartIconOutline,
  CurrencySymbol,
  HeartIconOutline,
  ImageContainer,
  Layout,
  Line,
  NoImage,
  PriceContainer,
  ProductBottom,
  ProductCard,
  ProductGrid,
  ProductImage,
  ProductName,
  Title,
  WithDiscount,
  WithoutDiscount,
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
                <PriceContainer>
                  <CurrencySymbol size="1rem" />
                  {item.onSale ? (
                    <>
                      <WithDiscount>{item.salePrice}</WithDiscount>
                      <WithoutDiscount>{item.regularPrice}</WithoutDiscount>
                    </>
                  ) : (
                    <>{item.price}</>
                  )}
                </PriceContainer>
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
