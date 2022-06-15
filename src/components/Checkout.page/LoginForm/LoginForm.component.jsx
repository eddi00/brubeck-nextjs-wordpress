import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { signInWithEmail } from "../../../redux/user/user.slice";

import {
  Container,
  ErrorLabel,
  Form,
  InputGroup,
  Line,
  LoadingContainer,
  SubmitButton,
} from "./LoginForm.styles";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loading);
  const loginError = useSelector(state => state.user.error);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async data => {
    dispatch(signInWithEmail(data));
  };

  return (
    <Container>
      <h3>Оформить через личный кабинет</h3>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <label>Электронная почта:</label>
          <input {...register("email", { required: true })} />
          {errors.username && (
            <ErrorLabel>Поле для обязательного заполнения.</ErrorLabel>
          )}
        </InputGroup>

        <InputGroup>
          <label>Пароль:</label>
          <input {...register("password", { required: true })} />
          {errors.password && (
            <ErrorLabel>Поле для обязательного заполнения.</ErrorLabel>
          )}
        </InputGroup>

        {!loading ? (
          <SubmitButton type="submit">Войти</SubmitButton>
        ) : (
          <LoadingContainer>
            <BeatLoader color="#B19436" loading={true} size={14} />
          </LoadingContainer>
        )}
        {loginError && (
          <ErrorLabel data-aos="fade">Ошибка при выполнение захода</ErrorLabel>
        )}
      </Form>
    </Container>
  );
};

export default LoginForm;
