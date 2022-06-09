import Link from "next/link";
import React, { useState } from "react";
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
        {/* <div>
          <CartIconOutline
            size="24"
            onClick={handleAddToCart}
            addedToCart={addedToCart}
          />
          <CartIconFilled
            size="24"
            onClick={handleAddToCart}
            addedToCart={addedToCart}
          />
        </div> */}
      </ProductBottom>
      <HeartIconOutline
        size="24"
        onClick={handleAddToFavorites}
        addedToFavorites={addedToFavorites}
      />
      <HeartIconFilled
        size="24"
        onClick={handleAddToFavorites}
        addedToFavorites={addedToFavorites}
      />
    </Card>
  );
};

export default ProductCard;
