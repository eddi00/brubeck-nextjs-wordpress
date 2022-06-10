import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
} from "../../../../redux/favorites/favorites.slice";
import {
  Card,
  CartIconFilled,
  CartIconOutline,
  CurrencySymbol,
  HeartIconFilled,
  HeartIconOutline,
  ImageContainer,
  Line,
  NoImage,
  PriceContainer,
  ProductBottom,
  ProductImage,
  ProductName,
  WithDiscount,
  WithoutDiscount,
} from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.favorites.favoriteItems)[
    product.id
  ];

  return (
    <Card>
      <Link href={"/products/" + product.id}>
        <ImageContainer>
          {product.images.length > 0 ? (
            <ProductImage src={product.images[0].src} layout="fill" />
          ) : (
            <NoImage size="144" />
          )}
        </ImageContainer>
      </Link>
      <Line />
      <Link href={"/products/" + product.id}>
        <ProductName>{product.name}</ProductName>
      </Link>

      <ProductBottom>
        <PriceContainer>
          <CurrencySymbol size="20" />
          {product.onSale ? (
            <>
              <WithDiscount>{product.salePrice}</WithDiscount>
              <WithoutDiscount>{product.regularPrice}</WithoutDiscount>
            </>
          ) : (
            <>{product.price}</>
          )}
        </PriceContainer>
      </ProductBottom>
      <HeartIconOutline
        size="24"
        addedToFavorites={favorite}
        onClick={() => dispatch(addItem(product.id))}
      />
      <HeartIconFilled
        size="24"
        addedToFavorites={favorite}
        onClick={() => dispatch(removeItem(product.id))}
      />
    </Card>
  );
};

export default ProductCard;
