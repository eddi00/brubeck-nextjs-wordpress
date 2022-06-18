import Image from "next/image";
import React, { useState } from "react";
import {
  DetailBox,
  DetailName,
  QuantityBoxClick,
  FlexWrapperShort,
  FlexWrapperStart,
  Grid,
  ImageContainer,
  ItemContainer,
  LeftSide,
  LeftSideGrid,
  NoImage,
  PriceContainer,
  PriceIcon,
  Quantity,
  QuantityBox,
  RightSide,
  RightSideGrid,
  LeftSideWrapper,
  RemoveFromCart,
  WarningBox,
  WarningIcon,
} from "./CartItem.styles";

import { returnColorRuName } from "../../Utils/returnColorRuName";
import { useDispatch } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../../redux/cart/cart.slice";

const CartItem = ({ cartItem, index }) => {
  const dispatch = useDispatch();

  const handleRemoveQty = () => {
    if (cartItem.quantity > 1) dispatch(removeItem(cartItem));
  };

  return (
    <>
      {cartItem.changedPrice && (
        <WarningBox>
          <WarningIcon size="16" />
          Цена изменилась
        </WarningBox>
      )}
      <ItemContainer>
        <LeftSide>
          <LeftSideWrapper>
            <h4>{index + 1}.</h4>
            <ImageContainer>
              {cartItem.imageSrc ? (
                <Image src={cartItem.imageSrc} width="150px" height="150px" />
              ) : (
                <NoImage size="90" />
              )}
            </ImageContainer>
          </LeftSideWrapper>
          <RemoveFromCart onClick={() => dispatch(clearItemFromCart(cartItem))}>
            Убрать с корзины
          </RemoveFromCart>
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
                <DetailName>Количество:</DetailName>
                <Quantity>
                  <QuantityBoxClick onClick={handleRemoveQty}>
                    -
                  </QuantityBoxClick>
                  <QuantityBox>{cartItem.quantity}</QuantityBox>
                  <QuantityBoxClick onClick={() => dispatch(addItem(cartItem))}>
                    +
                  </QuantityBoxClick>
                </Quantity>
              </FlexWrapperStart>
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
                  <h4>{cartItem.price * cartItem.quantity}</h4>
                </PriceContainer>
              </FlexWrapperStart>
            </RightSideGrid>
          </Grid>
        </RightSide>
      </ItemContainer>
    </>
  );
};

export default CartItem;
