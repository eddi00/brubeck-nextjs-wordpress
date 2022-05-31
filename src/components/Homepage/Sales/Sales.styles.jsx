import styled from "styled-components";
import Image from "next/image";
import { BiRuble } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { GiClothes } from "react-icons/gi";
import Link from "next/link";

export const Layout = styled.div`
  margin: 0 auto;
  width: 1168px;
  padding: 2rem 1rem 0rem 1rem;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;

// See https://getcssscan.com/css-box-shadow-examples
export const ProductCard = styled.div`
  width: 266px;
  height: 400px;

  /* width: 240px;
  height: 360px; */
  /* border: 1px solid ${props => props.theme.black_4}; */
  /* box-shadow: 0px 4px 4px ${props => props.theme.black_4}; */

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
`;

export const ProductBottom = styled.div`
  border-top: 1px solid ${props => props.theme.black_4};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  height: 2rem;
  margin-top: auto;
`;

export const PriceContainer = styled.div`
  font-size: 14px;
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
  &:hover {
    color: ${props => props.theme.primary_color_2};
  }
`;

export const HeartIconOutline = styled(IoMdHeartEmpty)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${props => props.theme.black_1};

  cursor: pointer;
  &:hover {
    color: ${props => props.theme.primary_color_2};
  }
`;

export const NoImage = styled(GiClothes)`
  color: ${props => props.theme.black_5};
`;

export const ButtonLink = styled(Link)``;

export const ButtonShop = styled.button`
  margin: 3rem auto 0 auto;
  display: block;
  width: 270px;
  height: 48px;
  background-color: ${props => props.theme.secondary_2_color_3};
  border-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;
  h5 {
    margin: 0;
  }
`;
