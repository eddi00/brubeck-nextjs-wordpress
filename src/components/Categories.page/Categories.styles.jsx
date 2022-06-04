import styled from "styled-components";
import { MdChevronRight } from "react-icons/md";

export const Layout = styled.main`
  width: 1168px;
  margin: 2rem auto;
  padding: 0 1rem;
  h2 {
    margin-bottom: 2rem;
  }
`;

export const Line = styled.div`
  margin: 2rem auto;
  width: 950px;
  height: 0px;
  border-bottom: 1px solid ${props => props.theme.black_4};
`;

// export const ImageContainer = styled.div`
//   position: relative;

// `;

export const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  position: relative;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
`;

export const Block = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid ${props => props.theme.black_4};
  cursor: pointer;
`;

export const Text = styled.h3`
  margin: 0;
`;

export const ArrowIcon = styled(MdChevronRight)`
  color: ${props => props.theme.black_1};
`;
