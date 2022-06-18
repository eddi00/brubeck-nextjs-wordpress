import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { createCustomer } from "../../redux/user/user.slice";

import {
  ErrorLabel,
  Form,
  InputGroup,
  LoadingContainer,
  SubmitButton,
} from "./RegisterForm.styles";

const RegisterForm = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.registerLoading);
  const registerError = useSelector(state => state.user.registerError);

  const {
    register: registerReg,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async data => {
    dispatch(createCustomer(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <label>*Имя:</label>
        <input {...registerReg("firstName", { required: true })} />
        {errors.firstName && (
          <ErrorLabel data-aos="fade">
            Поле для обязательного заполнения.
          </ErrorLabel>
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
        {errors.username && (
          <ErrorLabel data-aos="fade">
            Поле для обязательного заполнения.
          </ErrorLabel>
        )}
      </InputGroup>

      <InputGroup>
        <label>*Пароль:</label>
        <input {...registerReg("password", { required: true })} />
        {errors.password && (
          <ErrorLabel data-aos="fade">
            Поле для обязательного заполнения.
          </ErrorLabel>
        )}
      </InputGroup>

      {/* <InputGroup>
        <label>*Повторите пароль:</label>
        <input {...registerReg("passwordTwice", { required: true })} />
        {errors.passwordTwice && (
          <ErrorLabel data-aos="fade">
            Поле для обязательного заполнения.
          </ErrorLabel>
        )}
      </InputGroup> */}

      {!loading ? (
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
      {registerError === 38 && (
        <ErrorLabel data-aos="fade">Аккаунт уже существует.</ErrorLabel>
      )}
    </Form>
  );
};

export default RegisterForm;
