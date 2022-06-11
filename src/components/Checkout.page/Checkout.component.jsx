import React, { useState } from "react";
import { Layout } from "./Checkout.styles";
import CheckoutForm from "./CheckoutForm/CheckoutForm.component";

const Checkout = () => {
  const [firstView, setFirstView] = useState(true);

  return (
    <Layout>
      <h2>Оформление заказа</h2>

      {firstView ? (
        <div>
          <button onClick={() => setFirstView(false)}>
            Оформить без создания аккаунта
          </button>

          <button>Войти или зарегистрироваться</button>
        </div>
      ) : (
        <CheckoutForm />
      )}
    </Layout>
  );
};

export default Checkout;
