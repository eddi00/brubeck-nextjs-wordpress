import React from "react";
import {
  Container,
  MainImage,
  NoImage,
  NoImageWrapper,
  AdditionalImages,
  MainImageContainer,
} from "./Images.styles";
import MultipleImagesViewer from "../MultipleImagesViewer/MultipleImagesViewer.component";

const Images = ({ images }) => {
  return (
    <Container>
      {images.length > 0 ? (
        <>
          <MainImageContainer length={images.length > 0}>
            <MainImage src={images[0].src} layout="fill" />
          </MainImageContainer>
          <AdditionalImages>
            <MultipleImagesViewer images={images} />
          </AdditionalImages>
        </>
      ) : (
        <NoImageWrapper>
          <NoImage size="200" />
        </NoImageWrapper>
      )}
    </Container>
  );
};

export default Images;
