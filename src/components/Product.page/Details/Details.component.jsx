import React, { useState } from "react";
import AddToCartBox from "../AddToCartBox/AddToCartBox.component";
import {
  AddToCartContainer,
  Container,
  DetailsContainer,
  SuccessContainer,
  SuccessIcon,
  SuccessMessage,
  SuccessText,
  Wrapper,
} from "./Details.styles";

const Details = ({ product }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <Container>
      <h3>{product.name}</h3>
      <Wrapper>
        <DetailsContainer>Details</DetailsContainer>
        <AddToCartContainer>
          {!showSuccess ? (
            <AddToCartBox product={product} setShowSuccess={setShowSuccess} />
          ) : (
            <SuccessContainer>
              <SuccessMessage>
                <SuccessIcon size={32} />
                <SuccessText>Добавлен в корзину!</SuccessText>
              </SuccessMessage>
            </SuccessContainer>
          )}
        </AddToCartContainer>
      </Wrapper>
    </Container>
  );
};

export default Details;
