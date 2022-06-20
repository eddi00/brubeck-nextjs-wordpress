import styled from "styled-components";

export const Layout = styled.div`
  width: 1168px;
  margin: 3rem auto;
  padding: 0 1rem;

  & > ul {
    list-style: none;
    display: flex;
    margin: 3rem 0 2rem 0;
    padding: 0;
    gap: 2rem;

    & > li {
      cursor: pointer;
      font-size: 28px;
    }
  }
`;
