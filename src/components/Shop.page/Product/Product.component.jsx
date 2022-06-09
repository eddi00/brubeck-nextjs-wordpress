import Link from "next/link";
import React, { useState } from "react";
import {
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
  ProductCard,
  ProductImage,
  ProductName,
  WithDiscount,
  WithoutDiscount,
} from "./Product.styles";

const Product = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToFavorites, setAddedToFavorites] = useState(false);

  const handleAddToCart = () => {
    if (addedToCart) {
      setAddedToCart(false);
    } else {
      setAddedToCart(true);
    }
  };
  const handleAddToFavorites = () => {
    if (addedToFavorites) {
      setAddedToFavorites(false);
    } else {
      setAddedToFavorites(true);
    }
  };

  return (
    <ProductCard>
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
          {item.onSale ? (
            <>
              <WithDiscount>{item.salePrice}</WithDiscount>
              <WithoutDiscount>{item.regularPrice}</WithoutDiscount>
            </>
          ) : (
            <>{item.price}</>
          )}
        </PriceContainer>
        <div>
          <CartIconOutline
            size="26"
            onClick={handleAddToCart}
            addedToCart={addedToCart}
          />
          <CartIconFilled
            size="26"
            onClick={handleAddToCart}
            addedToCart={addedToCart}
          />
        </div>
      </ProductBottom>
      <HeartIconOutline
        size="26"
        onClick={handleAddToFavorites}
        addedToFavorites={addedToFavorites}
      />
      <HeartIconFilled
        size="26"
        onClick={handleAddToFavorites}
        addedToFavorites={addedToFavorites}
      />
    </ProductCard>
  );
};

export default Product;
