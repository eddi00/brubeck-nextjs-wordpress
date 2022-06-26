import React from "react";
import useSWR from "swr";
import { LoadingCartItem } from "./CartItem.styles";

import CartItem from "./CartItem.component";
import { useDispatch } from "react-redux";
import { modifyItem } from "../../../redux/cart/cart.slice";

const fetcher = url => fetch(url).then(res => res.json());

const CartItemWrapper = props => {
  const dispatch = useDispatch();
  const { cartItem } = props;
  const { data, error } = useSWR(`/api/product/${cartItem.id}`, fetcher);

  //if (error) return <div>An error has occured</div>;
  if (error) console.log(error);
  if (!data) return <LoadingCartItem />;

  if (cartItem.price != data.afc_price) {
    let newItem = structuredClone(cartItem);
    newItem.price = data.afc_price;
    newItem.changedPrice = true;

    let payload = {
      oldItem: cartItem,
      newItem,
    };

    dispatch(modifyItem(payload));
  }

  return <CartItem {...props} />;
};

export default CartItemWrapper;
