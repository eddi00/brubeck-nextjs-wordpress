import styled from "styled-components";
import Link from "next/link";

export const Layout = styled.div`
  margin: 2rem auto;
  width: 1168px;
  padding: 1rem 1rem 0rem 1rem;
`;

export const Title = styled.h3`
  text-align: center;
  padding-bottom: 3rem;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
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

export const ShortLine = styled.div`
  margin: 1rem auto;
  width: 280px;
  height: 0px;
  border-bottom: 1px solid ${props => props.theme.black_4};
`;
