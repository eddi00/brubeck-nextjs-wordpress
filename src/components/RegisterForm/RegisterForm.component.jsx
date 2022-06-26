import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { setUserCart } from "../../redux/cart/cart.slice";
import { setUserFavorites } from "../../redux/favorites/favorites.slice";
import { createCustomer } from "../../redux/user/user.slice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  ErrorLabel,
  Form,
  InputGroup,
  LoadingContainer,
  SubmitButton,
} from "./RegisterForm.styles";

const schema = yup.object().shape({
  firstName: yup.string().required("Поле для обязательного заполнения"),
  email: yup
    .string()
    .required("Поле для обязательного заполнения")
    .email("Введите правильную электронную почту"),
  password: yup
    .string()
    .required("Поле для обязательного заполнения")
    .min(6, "Пароль должен как минимум содержать 6 символов"),
  confirmPassword: yup
    .string()
    .required("Введите повторно пароль")
    .oneOf([yup.ref("password")], "Парол должен быть один и тот же"),
});

const RegisterForm = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const registerLoading = useSelector(state => state.user.registerLoading);
  const registerError = useSelector(state => state.user.registerError);

  const cart = useSelector(state => state.cart.cartItems);
  const favorites = useSelector(state => state.favorites.favoriteItems);

  const {
    register: registerReg,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const onSubmit = async data => {
    dispatch(createCustomer(data));
    dispatch(setUserCart(cart));
    dispatch(setUserFavorites(favorites));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <label>*Имя:</label>
        <input {...registerReg("firstName", { required: true })} />
        {errors.firstName && (
          <ErrorLabel data-aos="fade">{errors.firstName.message}</ErrorLabel>
        )}
      </InputGroup>

      <InputGroup>
        <label>Фамилия:</label>
        <input {...registerReg("lastName")} />
      </InputGroup>

      <InputGroup>
        <label>Отчество:</label>
        <input {...registerReg("secondName")} />
      </InputGroup>

      <InputGroup>
        <label>*Электронная почта:</label>
        <input type={"email"} {...registerReg("email", { required: true })} />
        {errors.email && (
          <ErrorLabel data-aos="fade">{errors.email.message}</ErrorLabel>
        )}
      </InputGroup>

      <InputGroup>
        <label>*Пароль:</label>
        <input {...registerReg("password")} />
        {errors.password && (
          <ErrorLabel data-aos="fade">{errors.password.message}</ErrorLabel>
        )}
      </InputGroup>

      <InputGroup>
        <label>*Повторите пароль:</label>
        <input {...registerReg("confirmPassword")} />
        {errors.confirmPassword && (
          <ErrorLabel data-aos="fade">
            {errors.confirmPassword.message}
          </ErrorLabel>
        )}
      </InputGroup>

      {!registerLoading ? (
        <SubmitButton type="submit">Создать</SubmitButton>
      ) : (
        <LoadingContainer>
          <BeatLoader color="#B19436" loading={true} size={14} />
        </LoadingContainer>
      )}
      {registerError && (
        <ErrorLabel data-aos="fade">
          Ошибка при попытке создать аккаунт.
        </ErrorLabel>
      )}
      {registerError === "userExists" && (
        <ErrorLabel data-aos="fade">Аккаунт уже существует.</ErrorLabel>
      )}
    </Form>
  );
};

export default RegisterForm;
