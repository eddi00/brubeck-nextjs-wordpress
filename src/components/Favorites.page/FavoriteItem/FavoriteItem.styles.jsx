import styled from "styled-components";
import ContentLoader from "react-content-loader";
import { GiClothes } from "react-icons/gi";
import { FaRubleSign } from "react-icons/fa";

const MyLoader = () => (
  <ContentLoader
    height={140}
    speed={1}
    backgroundColor={"#c7c7c7"}
    foregroundColor={"#e4e4e4"}
    viewBox="0 0 380 70"
  >
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="5" ry="5" width="50" height="50" />
    <rect x="80" y="17" rx="4" ry="4" width="200" height="10" />
    <rect x="80" y="40" rx="3" ry="3" width="150" height="8" />
  </ContentLoader>
);

export const LoadingCartItem = styled(MyLoader)`
  margin: 2rem 0;
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 1rem;

  border-bottom: 1px solid ${props => props.theme.black_5};
  margin-bottom: 2rem;
`;

export const LeftSide = styled.div`
  flex: 1;
`;

export const LeftSideWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const RightSide = styled.div`
  flex: 3;

  & > h4 {
    margin-bottom: 1rem;
    cursor: pointer;
  }

  & > h4:hover {
    color: ${props => props.theme.primary_color_3};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* max-height: 150px; */
  cursor: pointer;
  img {
    object-fit: contain;
  }
`;

export const NoImage = styled(GiClothes)`
  color: ${props => props.theme.black_5};
`;

export const RemoveFromCart = styled.div`
  margin: 1rem auto;
  /* width: 180px; */
  text-align: center;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 500;
  /* box-sizing: border-box; */
  padding: 0.25em 0.5em;
  border-radius: 20px;
  width: 70%;
  cursor: pointer;

  background-color: ${props => props.theme.black_5};
  color: ${props => props.theme.black_1};
  &:hover {
    background-color: ${props => props.theme.black_4};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 220px auto;
  column-gap: 2rem;
`;
export const LeftSideGrid = styled.div``;

export const RightSideGrid = styled.div``;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlexWrapperShort = styled(FlexWrapper)`
  margin-bottom: 1rem;
`;

export const FlexWrapperMargin = styled(FlexWrapper)`
  margin-bottom: 1rem;
`;

export const FlexWrapperStart = styled(FlexWrapper)`
  align-items: center;
  margin-bottom: 1rem;
`;

export const DetailName = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: ${props => props.theme.black_1};
`;

export const DetailBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.black_5};
  padding: 0.5em 1.5em;
  border-radius: 20px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: ${props => props.theme.black_1};

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.primary_color_5};
  padding: 0.25em 1.25em;
  border-radius: 20px;
`;

export const PriceIcon = styled(FaRubleSign)`
  color: ${props => props.theme.black_1};
  margin-right: 0.5rem;
`;
