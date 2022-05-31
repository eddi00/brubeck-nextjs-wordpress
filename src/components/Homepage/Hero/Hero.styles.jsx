import styled from "styled-components";
import Image from "next/image";

export const Layout = styled.div`
  margin: 0 auto;
  width: 1400px;
  background-color: ${props => props.theme.primary_color_3_25A};
  position: relative;
  /* box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px -4px 4px rgba(0, 0, 0, 0.25); */
  z-index: 1;
`;

export const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px -4px 4px rgba(0, 0, 0, 0.25);

  top: 0;
  left: 0;
`;

export const HorizontalGrid = styled.div`
  margin: 0 auto;
  width: 1168px;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
`;

export const TextGrid = styled.div`
  padding: 1rem 0;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  grid-column-gap: 1rem;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  /* row-gap: 1rem; */
`;

export const HeroTitle = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 40px; /* or 100% */

  h1 {
    margin-bottom: 1rem;
  }
  /* font-feature-settings: "liga" off; */
`;

export const HeroSubtitle = styled.span`
  max-width: 45%;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const HeroImageOne = styled(Image)`
  object-fit: cover;
`;
