import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { FlexWrapper, Layout, LoginContainer } from "./Checkout.styles";
import GuestForm from "./GuestForm/GuestForm.component";
import LoginForm from "../LoginForm/LoginForm.component";
import { useState } from "react";
import { useEffect } from "react";
import CheckoutForm from "./CheckoutForm/CheckoutForm.component";

const Checkout = () => {
  const router = useRouter();
  const cartItemsCount = useSelector(state => selectCartItemsCount(state));

  const [window, setWindow] = useState(1);

  const user = useSelector(state => state.user.currentUser);

  useEffect(() => {
    if (cartItemsCount === 0) router.push("/");

    if (user) setWindow(2);
  }, [user]);

  const FirstWindow = () => {
    return (
      <FlexWrapper>
        <GuestForm />
        <LoginContainer>
          <h3>Оформить через личный кабинет</h3>
          <LoginForm />
        </LoginContainer>
      </FlexWrapper>
    );
  };

  const showWindow = type => {
    switch (type) {
      case 1:
        return <FirstWindow />;
      case 2:
        return <CheckoutForm />;
    }
  };

  return <Layout>{showWindow(window)}</Layout>;
};

export default Checkout;
