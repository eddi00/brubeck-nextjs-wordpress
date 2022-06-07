import styled from "styled-components";

export const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-auto-rows: 450px;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  justify-content: center;
  /* justify-items: normal; */
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 300px);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 300px);
  }
  margin-bottom: 3rem;

  @media screen and (min-width: 1200px) {
    ${props => props.emptySpace && "margin-bottom: 480px"}
  }
`;
