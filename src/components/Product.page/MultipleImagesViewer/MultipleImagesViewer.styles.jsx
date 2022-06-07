import styled from "styled-components";

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.5rem;
`;

export const ImageGridItem = styled.img`
  cursor: pointer;
  object-fit: contain;

  height: 104px;
  width: 104px;
  padding: 4px;
  border: 1px solid ${props => props.theme.black_4};
  border-radius: 20px;

  /* &:hover {
    background-color: ${props => props.theme.black_5};
  } */
`;

export const ImageGridItemContainer = styled.div`
  width: 100%;
  object-fit: contain;
`;
