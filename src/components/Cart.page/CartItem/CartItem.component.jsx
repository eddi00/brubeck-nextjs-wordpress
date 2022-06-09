import Image from "next/image";
import React from "react";
import useSWR from "swr";
import {
  DetailBox,
  DetailName,
  FlexWrapperMargin,
  FlexWrapperShort,
  FlexWrapperStart,
  Grid,
  ImageContainer,
  ItemContainer,
  LeftSide,
  LeftSideGrid,
  LoadingCartItem,
  NoImage,
  PriceContainer,
  PriceIcon,
  RightSide,
  RightSideGrid,
} from "./CartItem.styles";

import { returnColorRuName } from "../../Utils/returnColorRuName";
// const fetcher = async () => {
//   const res = await axios.post("/api/getProduct", {
//     param: cartItem.id,
//   });
//   const data = await res.data;
//   return data;
// };

const fetcher = url => fetch(url).then(res => res.json());

const CartItem = ({ cartItem, index }) => {
  const { data, error } = useSWR(`/api/product/${cartItem.id}`, fetcher);

  if (error) return <div>An error has occured</div>;
  if (!data) return <LoadingCartItem />;

  console.log(data, index);
  return (
    <ItemContainer>
      <LeftSide>
        <h4>{index + 1}.</h4>
        <ImageContainer>
          {cartItem.imagesSrc ? (
            <Image src={cartItem.imagesSrc} width="150px" height="150px" />
          ) : (
            <NoImage size="90" />
          )}
        </ImageContainer>
      </LeftSide>
      <RightSide>
        <h4>{cartItem.name}</h4>
        <Grid>
          <LeftSideGrid>
            {cartItem.size && (
              <FlexWrapperShort>
                <DetailName>Размер:</DetailName>
                <DetailBox>{cartItem.size}</DetailBox>
              </FlexWrapperShort>
            )}
            {cartItem.color && (
              <FlexWrapperShort>
                <DetailName>Цвет:</DetailName>
                <DetailBox>{returnColorRuName(cartItem.color)}</DetailBox>
              </FlexWrapperShort>
            )}
          </LeftSideGrid>
          <RightSideGrid>
            <FlexWrapperStart>
              <DetailName>Цена за 1 шт.:</DetailName>
              <PriceContainer>
                <PriceIcon size="16" />
                <h4>{cartItem.price}</h4>
              </PriceContainer>
            </FlexWrapperStart>
            <FlexWrapperStart>
              <DetailName>Продукт * Количество:</DetailName>
              <PriceContainer>
                <PriceIcon size="16" />
                <h4>{cartItem.price}</h4>
              </PriceContainer>
            </FlexWrapperStart>
          </RightSideGrid>
        </Grid>
      </RightSide>
    </ItemContainer>
  );
};

export default CartItem;
