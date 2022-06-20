import styled from "styled-components";

export const ResumeContainer = styled.div`
  margin: 1rem 0;

  h4 {
    margin: 1rem 0;
  }
`;

export const LastOrders = styled.div`
  max-width: 560px;
`;

export const Order = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid ${props => props.theme.black_5};
  gap: 2rem;

  transition: all 0.3s;
  &:hover {
    background-color: ${props => props.theme.black_5};
    cursor: pointer;
  }
`;

export const Status = styled.div``;
