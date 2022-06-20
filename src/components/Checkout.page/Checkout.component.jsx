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

  const [window, setWindow] = useState("window_1");

  const user = useSelector(state => state.user.currentUser);

  useEffect(() => {
    if (cartItemsCount === 0) router.push("/");

    if (user) setWindow("windowForLoggedInUsers");
  }, []);

  const FirstWindow = (
    <FlexWrapper>
      <GuestForm />
      <LoginContainer>
        <h3>Оформить через личный кабинет</h3>
        <LoginForm />
      </LoginContainer>
    </FlexWrapper>
  );

  const showWindow = type => {
    switch (type) {
      case "window_1":
        return <FirstWindow />;
      case "windowForLoggedInUsers":
        return "hello";
    }
  };

  return <Layout>{showWindow(window)}</Layout>;
};

export default Checkout;
