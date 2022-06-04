import styled from "styled-components";
import { MdShoppingBasket } from "react-icons/md";

export const Container = styled.div`
  position: sticky;
  width: 270px;
  box-sizing: border-box;
  padding: 1rem;
  background-color: ${props => props.theme.secondary_1_color_3_10A};
  border-radius: 20px;
  transition: all 1s linear ease-in-out;
`;

export const Select = styled.select`
  width: 100%;
  height: 48px;
  margin-bottom: 1rem;
  background-color: ${props => props.theme.secondary_1_color_4_25A};
  border-radius: 10px;
`;

export const AddToCart = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.secondary_1_color_3};
  cursor: pointer;
  margin-top: ${props => (props.showMargin ? "1.5rem" : "0")};

  &:hover {
    background-color: ${props => props.theme.secondary_1_color_4};
  }
`;

export const AddToCartIcon = styled(MdShoppingBasket)`
  color: white;
  margin-right: 0.5rem;
`;

export const AddToCartText = styled.span`
  color: white;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
`;

export const TextGroup = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 24px;
  color: ${props => props.theme.black_1};
  margin-bottom: 0.5rem;

  div::first-letter {
    text-transform: capitalize;
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 1rem;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  box-sizing: border-box;
  background-color: ${props => props.theme.secondary_2_color_4};
  padding: 0.5rem;
  border-radius: 10px;
  color: white;
  text-align: center;
`;
