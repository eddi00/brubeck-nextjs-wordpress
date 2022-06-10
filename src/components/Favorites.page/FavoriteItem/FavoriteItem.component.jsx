import Image from "next/image";
import React from "react";
import {
  DetailName,
  FlexWrapperStart,
  Grid,
  ImageContainer,
  ItemContainer,
  LeftSide,
  LeftSideGrid,
  NoImage,
  PriceContainer,
  PriceIcon,
  RightSide,
  RightSideGrid,
  LeftSideWrapper,
  RemoveFromCart,
} from "./FavoriteItem.styles";

import { useDispatch } from "react-redux";
import { removeItem } from "../../../redux/favorites/favorites.slice";
import Link from "next/link";

const FavoriteItem = ({ cartItem, index, id }) => {
  const dispatch = useDispatch();

  return (
    <ItemContainer>
      <LeftSide>
        <LeftSideWrapper>
          <h4>{index + 1}.</h4>
          <Link href={`/products/${id}`}>
            <ImageContainer>
              {cartItem.images.length > 0 ? (
                <Image
                  src={cartItem.images[0].src}
                  width="300px"
                  height="300px"
                />
              ) : (
                <NoImage size="90" />
              )}
            </ImageContainer>
          </Link>
        </LeftSideWrapper>
        <RemoveFromCart onClick={() => dispatch(removeItem(id))}>
          Убрать
        </RemoveFromCart>
      </LeftSide>
      <RightSide>
        <Link href={`/products/${id}`}>
          <h4>{cartItem.name}</h4>
        </Link>
        <Grid>
          <LeftSideGrid>
            <FlexWrapperStart>
              <DetailName>Цена за 1 шт.:</DetailName>
              <PriceContainer>
                <PriceIcon size="16" />
                <h4>{cartItem.price}</h4>
              </PriceContainer>
            </FlexWrapperStart>
          </LeftSideGrid>
          <RightSideGrid></RightSideGrid>
        </Grid>
      </RightSide>
    </ItemContainer>
  );
};

export default FavoriteItem;
