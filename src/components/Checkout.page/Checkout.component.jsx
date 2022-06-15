import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { FlexWrapper, Layout } from "./Checkout.styles";
import GuestForm from "./GuestForm/GuestForm.component";
import LoginForm from "./LoginForm/LoginForm.component";

const Checkout = () => {
  const router = useRouter();
  const cartItemsCount = useSelector(state => selectCartItemsCount(state));
  if (cartItemsCount === 0) router.push("/");

  return (
    <Layout>
      {/* <h2>Оформление заказа</h2> */}
      <FlexWrapper>
        <GuestForm />
        <LoginForm />
      </FlexWrapper>
    </Layout>
  );
};

export default Checkout;
