import React from "react";
import LoginForm from "../LoginForm/LoginForm.component";
import RegisterForm from "../RegisterForm/RegisterForm.component";
import {
  FlexWrapper,
  Layout,
  LoginContainer,
  RegisterContainer,
} from "./Login.styles";

const Login = () => {
  return (
    <Layout>
      <FlexWrapper>
        <RegisterContainer>
          <h3>Создать аккаунт</h3>
          <RegisterForm />
        </RegisterContainer>
        <LoginContainer>
          <h3>Войти</h3>
          <LoginForm />
        </LoginContainer>
      </FlexWrapper>
    </Layout>
  );
};

export default Login;
