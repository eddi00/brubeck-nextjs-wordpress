import styled from "styled-components";
import { BsCheckCircle } from "react-icons/bs";
import { FaRubleSign } from "react-icons/fa";

export const Container = styled.div`
  flex: 2;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 1rem;
`;

export const DetailsContainer = styled.div`
  flex: 1;
`;

export const AddToCartContainer = styled.div`
  flex: 1;

  /* display: flex;
  justify-content: center; */
`;

export const SuccessContainer = styled.div`
  background-color: ${props => props.theme.secondary_2_color_3_10A};
  box-sizing: border-box;
  padding: 1.25rem;
  border-radius: 20px;
  transition: all 3s linear ease-in;
`;

export const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 64px;
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

export const GoToCart = styled.div`
  border-radius: 10px;
  width: 240px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.secondary_2_color_3};
  cursor: pointer;
  margin-top: 1rem;
  color: white;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;

  &:hover {
    background-color: ${props => props.theme.secondary_2_color_2};
  }
`;

export const DetailSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.black_4};
  padding: 1rem 0;

  &:last-child {
    border-bottom: none;
  }
`;

export const DetailName = styled.span`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;

export const DetailText = styled.span`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const DetailSectionPrice = styled(DetailSection)`
  align-items: flex-start;
`;

export const DetailSize = styled(DetailName)``;

export const ColorCircle = styled.div`
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50px;
  background-color: ${props => props.color};
  border: 1px solid ${props => props.theme.black_4};
`;

export const DetailNamePrice = styled(DetailName)`
  font-size: 20px;
`;

export const RegularPrice = styled.span`
  text-decoration: line-through;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: ${props => props.theme.black_2};
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.75rem 1rem;
  background-color: ${props => props.theme.black_5};
  border-radius: 20px;
`;

export const PriceIcon = styled(FaRubleSign)`
  color: ${props => props.theme.black_2};
  margin-right: 0.5rem;
`;

export const PriceNumber = styled.h3``;
