import styled from "styled-components";

export const Layout = styled.div`
  margin: 0 auto;
  width: 1168px;
  padding: 0 1rem;
  background-color: ${props => props.theme.primary_color_3_25A};
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  object-fit: contain;
`;

export const Text = styled.div`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
  /* or 133% */

  margin: auto 0;
  text-align: right;
`;
