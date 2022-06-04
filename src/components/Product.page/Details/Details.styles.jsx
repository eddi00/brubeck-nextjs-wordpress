import styled from "styled-components";
import { BsCheckCircle } from "react-icons/bs";
export const Container = styled.div`
  flex: 2;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
`;

export const DetailsContainer = styled.div`
  flex: 1;
`;

export const AddToCartContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const SuccessContainer = styled.div`
  background-color: ${props => props.theme.black_5};
  /* box-sizing: border-box; */
  padding: 1.25rem;
  border-radius: 20px;
  transition: all 1s linear ease-in;
`;

export const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SuccessIcon = styled(BsCheckCircle)`
  color: #009900;
  margin-right: 0.75rem;
`;

export const SuccessText = styled.span`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 16px;
`;
