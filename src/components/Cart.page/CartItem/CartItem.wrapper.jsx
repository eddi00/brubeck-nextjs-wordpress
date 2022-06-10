import React from "react";
import useSWR from "swr";
import { LoadingCartItem } from "./CartItem.styles";

import CartItem from "./CartItem.component";

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
