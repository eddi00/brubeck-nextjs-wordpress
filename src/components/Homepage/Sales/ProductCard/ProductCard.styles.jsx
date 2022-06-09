import styled from "styled-components";
import Image from "next/image";
import { BiRuble } from "react-icons/bi";
import { MdOutlineShoppingCart, MdShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { GiClothes } from "react-icons/gi";

// See https://getcssscan.com/css-box-shadow-examples
export const Card = styled.div`
  width: 266px;
  height: 400px;

  /* width: 240px;
  height: 360px; */
  /* border: 1px solid ${props => props.theme.black_4}; */
  /* box-shadow: 0px 4px 4px ${props => props.theme.black_4}; */

  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */

  border-radius: 5px;
  box-sizing: border-box;
  padding: 1rem;
  /* display: block; */
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ImageContainer = styled.div`
  /* height: 200px; */
  height: 250px;
  width: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const ProductImage = styled(Image)`
  object-fit: contain;
`;

export const Line = styled.div`
  color: ${props => props.theme.black_4};
  width: 100%;
  height: 0px;
  border-bottom: 1px solid ${props => props.theme.black_4};
  margin: 0.75rem 0;
`;

export const ProductName = styled.span`
  font-size: 14px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  cursor: pointer;
`;

export const ProductBottom = styled.div`
  border-top: 1px solid ${props => props.theme.black_4};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  height: 2rem;
  margin-top: auto;
`;

export const PriceContainer = styled.div`
  font-size: 16px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding-bottom: 2px;
`;

export const WithoutDiscount = styled.span`
  text-decoration: line-through;
  color: ${props => props.theme.black_3};
`;

export const WithDiscount = styled.span`
  margin-right: 8px;
`;

export const CurrencySymbol = styled(BiRuble)`
  margin-right: 0.25rem;
  color: ${props => props.theme.black_1};
`;

export const CartIconOutline = styled(MdOutlineShoppingCart)`
  color: ${props => props.theme.black_1};
  cursor: pointer;
  transition: all 0.1s ease;
  &:hover {
    color: ${props => props.theme.primary_color_2};
    transform: scale(1.25);
  }

  display: ${props => (props.addedToCart ? "none" : "block")};
`;

export const CartIconFilled = styled(MdShoppingCart)`
  color: ${props => props.theme.primary_color_2};
  cursor: pointer;
  transition: all 0.1s ease;
  &:hover {
    transform: scale(1.25);
  }

  display: ${props => (props.addedToCart ? "block" : "none")};
`;

export const HeartIconOutline = styled(IoMdHeartEmpty)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${props => props.theme.black_1};
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    color: ${props => props.theme.primary_color_2};
    transform: scale(1.25);
  }

  display: ${props => (props.addedToFavorites ? "none" : "block")};
`;

export const HeartIconFilled = styled(IoMdHeart)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${props => props.theme.primary_color_2};
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    transform: scale(1.25);
  }

  display: ${props => (props.addedToFavorites ? "block" : "none")};
`;

export const NoImage = styled(GiClothes)`
  color: ${props => props.theme.black_5};
`;
