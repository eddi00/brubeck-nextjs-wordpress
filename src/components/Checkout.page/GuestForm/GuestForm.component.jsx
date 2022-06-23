import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { selectCartItems } from "../../../redux/cart/cart.selectors";
import { emptyCart } from "../../../redux/cart/cart.slice";
import {
  Container,
  ErrorLabel,
  Form,
  InputGroup,
  Line,
  LoadingContainer,
  SubmitButton,
} from "./GuestForm.styles";

const GuestForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const cartItems = useSelector(state => selectCartItems(state));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async data => {
    setLoading(true);

    let bodyRequest = {
      cart: cartItems,
      customer: data,
    };

    const res = await axios.post("/api/orders/guest-order", bodyRequest);
    // const res = await axios.get("/orders/new-order");
    console.log(res);

    if (res.status === 200) {
      dispatch(emptyCart());
      router.push("/thank-you");
    }
  };

  return (
    <Container>
      <h3>Оформить быстро</h3>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <label>Фамилия:</label>
          <input {...register("lastName")} />
        </InputGroup>

        <InputGroup>
          <label>*Имя:</label>
          <input {...register("firstName", { required: true })} />
          {errors.firstName && (
            <ErrorLabel>Поле для обязательного заполнения.</ErrorLabel>
          )}
        </InputGroup>

        <InputGroup>
          <label>Отчество:</label>
          <input {...register("secondName")} />
        </InputGroup>

        <InputGroup>
          <label>*Телефон:</label>
          <input
            type={"tel"}
            maxLength="12"
            {...register("phone", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
          {errors.phone && (
            <ErrorLabel>Поле для обязательного заполнения.</ErrorLabel>
          )}
        </InputGroup>

        <InputGroup>
          <label>*Электронная почта:</label>
          {/* <input
            type={"email"}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          /> */}
          <input type={"email"} {...register("email", { required: true })} />
          {errors.email && (
            <ErrorLabel>Поле для обязательного заполнения.</ErrorLabel>
          )}
        </InputGroup>
        {!loading ? (
          <SubmitButton type="submit">Отправить</SubmitButton>
        ) : (
          <LoadingContainer>
            <BeatLoader color="#B19436" loading={true} size={14} />
          </LoadingContainer>
        )}
        {error && (
          <ErrorLabel data-aos="fade">
            Ошибка при попытке создать заказ.
          </ErrorLabel>
        )}
      </Form>
    </Container>
  );
};

export default GuestForm;
