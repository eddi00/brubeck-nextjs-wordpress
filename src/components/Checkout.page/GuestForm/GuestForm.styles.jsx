import styled from "styled-components";

export const Container = styled.div`
  h3 {
    margin-bottom: 2rem;
  }
`;

export const Form = styled.form`
  font-family: "Open Sans";
`;

export const InputGroup = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.25rem;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
  }

  input {
    height: 40px;
    background-color: ${props => props.theme.black_5};
    border-radius: 5px;
    width: 280px;
    border: none;

    box-sizing: border-box;
    padding-left: 1rem;
    /* transition: all 0.1s; */

    outline: none;
    /* outline-color: ${props => props.theme.primary_color_3};
    outline-width: 2px; */

    font-weight: 400;

    &:hover,
    &:focus {
      /* background-color: rgba(0, 0, 0, 0.2); */
      outline: ${props => props.theme.primary_color_3} solid 2px;
    }
  }
`;

export const ErrorLabel = styled.span`
  display: block;
  color: red;
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: 12px;
`;

export const SubmitButton = styled.button`
  margin-top: 0.5rem;
  width: 280px;
  height: 40px;
  color: white;

  background-color: ${props => props.theme.primary_color_3};
  border-radius: 5px;
  border: none;
  cursor: pointer;

  outline: none;

  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s;

  &:hover {
    background-color: ${props => props.theme.primary_color_2};
  }
`;

export const LoadingContainer = styled.div`
  margin-top: 0.5rem;
  width: 280px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
