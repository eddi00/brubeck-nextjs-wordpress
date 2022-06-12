import styled from "styled-components";

export const Layout = styled.div`
  width: 1168px;
  margin: 3rem auto;
  padding: 0 1rem;

  h2 {
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
`;
