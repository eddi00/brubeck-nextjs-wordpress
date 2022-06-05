import styled from "styled-components";
import Image from "next/image";
import { GiClothes } from "react-icons/gi";

export const Container = styled.div`
  flex: 1;
`;

export const MainImageContainer = styled.div`
  position: relative;
  height: ${props => (props.length ? "360px" : "320px")};
`;
export const MainImage = styled(Image)`
  width: 100%;
  object-fit: contain;
`;

export const NoImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
`;

export const NoImage = styled(GiClothes)`
  color: ${props => props.theme.black_5};
`;

export const AdditionalImages = styled.div`
  margin-top: 1rem;
`;
