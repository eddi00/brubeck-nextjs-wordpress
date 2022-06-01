import styled from "styled-components";

export const Layout = styled.main`
  width: 1168px;
  margin: 2rem auto;
  padding: 0 1rem;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Grid = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 5fr;
  column-gap: 1rem; */
  display: flex;
  gap: 1.5rem;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  margin-top: 2rem;
`;
