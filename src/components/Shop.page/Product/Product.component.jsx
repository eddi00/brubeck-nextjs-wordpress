import Link from "next/link";
import React from "react";
import {
  Card,
  CartIconOutline,
  CurrencySymbol,
  HeartIconOutline,
  ImageContainer,
  Line,
  NoImage,
  PriceContainer,
  ProductBottom,
  ProductCard,
  ProductImage,
  ProductName,
  WithDiscount,
  WithoutDiscount,
} from "./Product.styles";

const Product = ({ item }) => {
  return (
    <ProductCard>
      <ImageContainer>
        {item.images.length > 0 ? (
          <ProductImage src={item.images[0].src} layout="fill" />
        ) : (
          <NoImage size="144" />
        )}
      </ImageContainer>
      <Line />
      <ProductName>
        <Link href={"/products/" + item.id}>{item.name}</Link>
      </ProductName>
      <ProductBottom>
        <PriceContainer>
          <CurrencySymbol size="16" />
          {item.onSale ? (
            <>
              <WithDiscount>{item.salePrice}</WithDiscount>
              <WithoutDiscount>{item.regularPrice}</WithoutDiscount>
            </>
          ) : (
            <>{item.price}</>
          )}
        </PriceContainer>
        <CartIconOutline size="24" />
      </ProductBottom>
      <HeartIconOutline size="24" />
    </ProductCard>
  );
};

export default Product;
