import React from "react";
import { useSelector } from "react-redux";
import {
  CartList,
  Checkout,
  CheckoutContainer,
  FlexWrapper,
  Layout,
} from "./Cart.styles";
import CartItemWrapper from "./CartItem/CartItem.wrapper";
import CheckoutBox from "./CheckoutBox/CheckoutBox.component";

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
              <CartItemWrapper cartItem={item} key={index} index={index} />
            ))}
          </CartList>
          <CheckoutContainer>
            <CheckoutBox />
          </CheckoutContainer>
        </FlexWrapper>
      ) : (
        <h4>Ваша корзина пустая.</h4>
      )}
    </Layout>
  );
};

export default Cart;
