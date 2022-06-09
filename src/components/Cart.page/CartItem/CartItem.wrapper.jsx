import Image from "next/image";
import React, { useState } from "react";
import useSWR from "swr";
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
} from "./CartItem.styles";

import { returnColorRuName } from "../../Utils/returnColorRuName";
import CartItem from "./CartItem.component";
// const fetcher = async () => {
//   const res = await axios.post("/api/getProduct", {
//     param: cartItem.id,
//   });
//   const data = await res.data;
//   return data;
// };

const fetcher = url => fetch(url).then(res => res.json());

const CartItemWrapper = props => {
  const { cartItem } = props;
  const { data, error } = useSWR(`/api/product/${cartItem.id}`, fetcher);

  if (error) return <div>An error has occured</div>;
  if (!data) return <LoadingCartItem />;

  console.log(data);

  return <CartItem {...props} />;
};

export default CartItemWrapper;
