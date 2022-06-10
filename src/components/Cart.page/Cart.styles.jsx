import styled from "styled-components";

export const Layout = styled.div`
  width: 1168px;
  padding: 3rem 1rem;
  margin: 0 auto;

  & > h2 {
    margin-bottom: 3rem;
  }

  & > h4 {
    margin-bottom: 10rem;
    margin-top: 2rem;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CartList = styled.div`
  flex: 2;
`;

export const CheckoutContainer = styled.div`
  flex: 1;
`;
