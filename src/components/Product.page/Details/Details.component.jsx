import Link from "next/link";
import React, { useState } from "react";
import { returnHexColor } from "../../Utils/returnHexColor";
import AddToCartBox from "../AddToCartBox/AddToCartBox.component";
import {
  AddToCartContainer,
  ColorCircle,
  Container,
  DetailName,
  DetailNamePrice,
  DetailsContainer,
  DetailSection,
  DetailSectionPrice,
  DetailSize,
  DetailText,
  DetailWrapper,
  GoToCart,
  PriceContainer,
  PriceIcon,
  PriceNumber,
  RegularPrice,
  SuccessContainer,
  SuccessIcon,
  SuccessMessage,
  SuccessText,
  Wrapper,
} from "./Details.styles";

const Details = ({ product, colorTable }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  // console.log(product);
  // console.log(colorTable);
  return (
    <Container>
      <h3>{product.name}</h3>
      <Wrapper>
        <DetailsContainer>
          {product.sku && (
            <DetailSection>
              <DetailName>Артикул</DetailName>
              <DetailText>{product.sku}</DetailText>
            </DetailSection>
          )}
          <DetailSection>
            <DetailName>Фирма</DetailName>
            <DetailText>Brubeck</DetailText>
          </DetailSection>
          {product.sizeList.length > 0 && (
            <DetailSection>
              <DetailName>Размеры</DetailName>
              <DetailWrapper>
                {product.sizeList.map((item, key) => (
                  <DetailSize key={key}>{item}</DetailSize>
                ))}
              </DetailWrapper>
            </DetailSection>
          )}
          {product.colorList.length > 0 && (
            <DetailSection>
              <DetailName>Цвета</DetailName>
              <DetailWrapper>
                {product.colorList.map((item, key) => (
                  <ColorCircle
                    key={key}
                    color={returnHexColor(colorTable, item)}
                  />
                ))}
              </DetailWrapper>
            </DetailSection>
          )}
          <DetailSectionPrice>
            <DetailNamePrice>Стоимость</DetailNamePrice>
            {product.afc_salePrice ? (
              <DetailWrapper>
                <RegularPrice>{product.afc_regularPrice}</RegularPrice>
                <PriceContainer>
                  <PriceIcon size="20" />
                  <PriceNumber>{product.afc_price}</PriceNumber>
                </PriceContainer>
              </DetailWrapper>
            ) : (
              <PriceContainer>
                <PriceIcon size="20" />
                <PriceNumber>{product.afc_price}</PriceNumber>
              </PriceContainer>
            )}
          </DetailSectionPrice>
        </DetailsContainer>
        <AddToCartContainer>
          {!showSuccess ? (
            <AddToCartBox
              product={product}
              setShowSuccess={setShowSuccess}
              colorTable={colorTable}
            />
          ) : (
            <SuccessContainer>
              <SuccessMessage>
                <SuccessIcon size={32} />
                <SuccessText>Добавлен в корзину!</SuccessText>
              </SuccessMessage>
              <Link href="/cart">
                <GoToCart>Перейти в корзину</GoToCart>
              </Link>
            </SuccessContainer>
          )}
        </AddToCartContainer>
      </Wrapper>
    </Container>
  );
};

export default Details;
