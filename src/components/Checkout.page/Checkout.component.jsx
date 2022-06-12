import React, { useState } from "react";
import { FlexWrapper, Layout } from "./Checkout.styles";
import GuestForm from "./GuestForm/GuestForm.component";

const Checkout = () => {
  return (
    <Layout>
      {/* <h2>Оформление заказа</h2> */}
      <FlexWrapper>
        <GuestForm />
      </FlexWrapper>
    </Layout>
  );
};

export default Checkout;
