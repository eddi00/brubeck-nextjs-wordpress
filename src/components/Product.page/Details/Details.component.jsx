import React from "react";
import AddToCartBox from "../AddToCartBox/AddToCartBox.component";
import {
  AddToCartContainer,
  Container,
  DetailsContainer,
  Wrapper,
} from "./Details.styles";

const Details = ({ product }) => {
  console.log(product);
  return (
    <Container>
      <h3>{product.name}</h3>
      <Wrapper>
        <DetailsContainer>Details</DetailsContainer>
        <AddToCartContainer>
          <AddToCartBox product={product} />
        </AddToCartContainer>
      </Wrapper>
    </Container>
  );
};

export default Details;
