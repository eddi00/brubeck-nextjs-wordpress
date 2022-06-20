import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartItemsCount,
  selectCartTotal,
} from "../../../redux/cart/cart.selectors";

import {
  Box,
  ButtonText,
  CheckoutButton,
  CheckoutIcon,
  PriceContainer,
  PriceIcon,
  TextGroup,
} from "./CheckoutBox.styles";

const CheckoutBox = () => {
  const totalQuantity = useSelector(state => selectCartItemsCount(state));
  const totalPrice = useSelector(state => selectCartTotal(state));

  return (
    <Box>
      <TextGroup>
        <div>Количество:</div>
        <h4>{totalQuantity}</h4>
      </TextGroup>
      <TextGroup>
        <div>Итого:</div>
        <PriceContainer>
          <PriceIcon size="16" />
          <h4>{totalPrice}</h4>
        </PriceContainer>
      </TextGroup>
      <Link href="/checkout">
        <CheckoutButton>
          <CheckoutIcon size="20" />
          <ButtonText>Перейти к оформлению</ButtonText>
        </CheckoutButton>
      </Link>
    </Box>
  );
};

export default CheckoutBox;
