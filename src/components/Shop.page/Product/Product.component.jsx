import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../../redux/favorites/favorites.slice";
import {
  CurrencySymbol,
  HeartIconFilled,
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
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.favorites.favoriteItems)[item.id];

  console.log(item);
  return (
    <ProductCard data-aos="fade">
      <Link href={"/products/" + item.id}>
        <ImageContainer>
          {item.images.length > 0 ? (
            <ProductImage src={item.images[0].src} layout="fill" />
          ) : (
            <NoImage size="144" />
          )}
        </ImageContainer>
      </Link>
      <Line />
      <ProductName>
        <Link href={"/products/" + item.id}>{item.name}</Link>
      </ProductName>
      <ProductBottom>
        <PriceContainer>
          <CurrencySymbol size="20" />
          {item.onSale && item.salePrice !== "" ? (
            <>
              <WithDiscount>{item.salePrice}</WithDiscount>
              <WithoutDiscount>{item.regularPrice}</WithoutDiscount>
            </>
          ) : (
            <>{item.price}</>
          )}
        </PriceContainer>
      </ProductBottom>
      <HeartIconOutline
        size="26"
        addedToFavorites={favorite}
        onClick={() => dispatch(addItem(item.id))}
      />
      <HeartIconFilled
        size="26"
        addedToFavorites={favorite}
        onClick={() => dispatch(removeItem(item.id))}
      />
    </ProductCard>
  );
};

export default Product;
