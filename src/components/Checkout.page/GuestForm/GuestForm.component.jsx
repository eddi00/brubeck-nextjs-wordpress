import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../redux/cart/cart.selectors";
import {
  Container,
  ErrorLabel,
  Form,
  InputGroup,
  Line,
  SubmitButton,
} from "./GuestForm.styles";

const GuestForm = () => {
  const cartItems = useSelector(state => selectCartItems(state));
  console.log(cartItems);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    console.log(data);

    let bodyRequest = {
      cart: cartItems,
      customer: data,
    };

    const res = await axios.post("/api/orders/new-order", bodyRequest);
    // const res = await axios.get("/orders/new-order");
    console.log(res);
  };

  return (
    <Container>
      <h3>Оформить быстро</h3>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <label>Фамилия:</label>
          <input {...register("lastname")} />
        </InputGroup>

        <InputGroup>
          <label>*Имя:</label>
          <input {...register("firstname", { required: true })} />
          {errors.firstname && (
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

        <SubmitButton type="submit">Отправить</SubmitButton>
      </Form>
    </Container>
  );
};

export default GuestForm;
