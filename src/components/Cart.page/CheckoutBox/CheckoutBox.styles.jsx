import styled from "styled-components";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaRubleSign } from "react-icons/fa";

export const Box = styled.div`
  /* position: sticky;
  top: 10px; */
  width: 270px;
  /* width: 100%; */
  /* transition: all 1s linear ease-in-out; */
  box-sizing: border-box;
  padding: 1rem;
  background-color: ${props => props.theme.secondary_1_color_3_10A};
  border-radius: 20px;
  margin: 0 auto;
`;

export const CheckoutButton = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.secondary_1_color_3};
  cursor: pointer;
  margin-top: 1.5rem;

  &:hover {
    background-color: ${props => props.theme.secondary_1_color_2};
  }
`;

export const CheckoutIcon = styled(MdAccountBalanceWallet)`
  color: white;
  margin-right: 0.5rem;
`;

export const ButtonText = styled.span`
  color: white;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
`;

export const TextGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.black_1};
  margin-bottom: 0.5rem;

  div::first-letter {
    text-transform: capitalize;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: ${props => props.theme.secondary_1_color_3_10A};
  padding: 0.25em 1.25em; */
  border-radius: 20px;
`;

export const PriceIcon = styled(FaRubleSign)`
  color: ${props => props.theme.black_1};
  margin-right: 0.5rem;
`;
