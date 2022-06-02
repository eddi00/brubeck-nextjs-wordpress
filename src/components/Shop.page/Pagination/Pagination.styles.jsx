import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const NumberContainer = styled.div`
  /* border: ${props =>
    props.activePage
      ? "0px solid rgba(0,0,0,25)"
      : "1px solid rgba(0,0,0,0.25)"}; */
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 0.25rem 0.5rem;
  color: ${props => (props.activePage ? "white" : "rgba(0,0,0,0.75)")};
  background-color: ${props =>
    props.activePage ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0)"};
  cursor: pointer;
  font-weight: 500;
`;
