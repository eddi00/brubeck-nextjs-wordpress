import styled from "styled-components";

export const Layout = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  width: 1168px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 400px;
  width: 366px;
  object-fit: contain;
  object-position: top;

  span,
  img {
    z-index: 1;
  }
`;

export const Category = styled.div`
  background-image: url(${props => props.src});
`;

export const Button = styled.div`
  display: block;
  margin: 0 auto;
  margin-top: 90%;
  width: 280px;
  height: 40px;
  background-color: ${props => props.theme.black_2};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  color: white;
  font-family: "Ubuntu";
  font-size: 14px;
  font-weight: 500;

  z-index: 5;
  position: relative;
`;
