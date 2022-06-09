import React from "react";
import { useSelector } from "react-redux";
import {
  CartList,
  Checkout,
  CheckoutContainer,
  FlexWrapper,
  Layout,
} from "./Cart.styles";
import CartItem from "./CartItem/CartItem.component";

const Cart = () => {
  const cart = useSelector(state => state.cart.cartItems);
  console.log(cart);

  return (
    <Layout>
      <h2>Корзина</h2>
      {cart.length > 0 ? (
        <FlexWrapper>
          <CartList>
            {cart.map((item, index) => (
              <CartItem cartItem={item} key={index} index={index} />
            ))}
          </CartList>
          <CheckoutContainer></CheckoutContainer>
        </FlexWrapper>
      ) : (
        <h4>Ваша корзина пустая.</h4>
      )}
    </Layout>
  );
};

export default Cart;
