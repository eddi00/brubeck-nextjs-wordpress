import styled from "styled-components";

export const Layout = styled.main`
  margin: 0 auto;
  width: 1168px;
  padding: 2rem 1rem;
`;

export const TopSection = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Description = styled.div`
  border-top: 1px solid ${props => props.theme.black_3};
  margin-top: 1rem;
  padding: 1rem 0;
  width: 66%;
`;

export const DescriptionTitle = styled.h4`
  padding: 0.5rem 0 1rem 0;
`;

export const DescriptionContent = styled.div``;
