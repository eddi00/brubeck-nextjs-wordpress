import React, { useState } from "react";
import {
  ImageGridItem,
  ImageGridItemContainer,
  ImagesGrid,
} from "./MultipleImagesViewer.styles";
import { useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

const MultipleImagesViewer = ({ images }) => {
  let imagesSrc = [];
  imagesSrc = images.reduce((acc, item) => {
    acc.push(item.src);
    return acc;
  }, []);

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <>
      <ImagesGrid>
        {images.map((item, index) => (
          <ImageGridItemContainer key={index}>
            <ImageGridItem
              src={item.src}
              alt="product image"
              onClick={() => openImageViewer(index)}
            />
          </ImageGridItemContainer>
        ))}
      </ImagesGrid>
      {isViewerOpen && (
        <ImageViewer
          src={imagesSrc}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
          backgroundStyle={{ zIndex: 999 }}
        />
      )}
    </>
  );
};

export default MultipleImagesViewer;
