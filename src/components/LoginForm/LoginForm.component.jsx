import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { signInWithEmail_start } from "../../redux/user/user.slice";

import {
  ErrorLabel,
  Form,
  InputGroup,
  LoadingContainer,
  SubmitButton,
} from "./LoginForm.styles";

const LoginForm = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loginLoading);
  const loginError = useSelector(state => state.user.loginError);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async data => {
    console.log(router);

    const config = { data, pathname: router.pathname };
    dispatch(signInWithEmail_start(config));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <label>Электронная почта:</label>
        <input {...register("email", { required: true })} />
        {errors.username && (
          <ErrorLabel data-aos="fade">
            Поле для обязательного заполнения.
          </ErrorLabel>
        )}
      </InputGroup>

      <InputGroup>
        <label>Пароль:</label>
        <input
          type={"password"}
          {...register("password", { required: true })}
        />
        {errors.password && (
          <ErrorLabel data-aos="fade">
            Поле для обязательного заполнения.
          </ErrorLabel>
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
  );
};

export default LoginForm;
