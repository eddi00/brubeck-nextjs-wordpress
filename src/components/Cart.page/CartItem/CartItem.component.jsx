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
  LoadingCartItem,
  NoImage,
  PriceContainer,
  PriceIcon,
  Quantity,
  QuantityBox,
  RightSide,
  RightSideGrid,
  LeftSideWrapper,
  RemoveFromCart,
} from "./CartItem.styles";

import { returnColorRuName } from "../../Utils/returnColorRuName";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../redux/cart/cart.actions";

const CartItem = ({ cartItem, index }) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const dispatch = useDispatch();

  const handleAddQty = () => {
    setQuantity(++quantity);
  };
  const handleRemoveQty = () => {
    if (quantity > 1) setQuantity(--quantity);
  };

  return (
    <ItemContainer>
      <LeftSide>
        <LeftSideWrapper>
          <h4>{index + 1}.</h4>
          <ImageContainer>
            {cartItem.imagesSrc ? (
              <Image src={cartItem.imagesSrc} width="150px" height="150px" />
            ) : (
              <NoImage size="90" />
            )}
          </ImageContainer>
        </LeftSideWrapper>
        <RemoveFromCart onClick={() => dispatch(removeItem(cartItem))}>
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
                <QuantityBoxClick onClick={handleRemoveQty}>-</QuantityBoxClick>
                <QuantityBox>{quantity}</QuantityBox>
                <QuantityBoxClick onClick={handleAddQty}>+</QuantityBoxClick>
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
                <h4>{cartItem.price * quantity}</h4>
              </PriceContainer>
            </FlexWrapperStart>
          </RightSideGrid>
        </Grid>
      </RightSide>
    </ItemContainer>
  );
};

export default CartItem;
