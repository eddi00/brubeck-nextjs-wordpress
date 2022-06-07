import styled from "styled-components";

export const Container = styled.div`
  width: 180px;
  min-width: 180px;
`;

export const Line = styled.div`
  height: 0px;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.black_4};
  margin: 1rem 0;
`;

export const SectionTitle = styled.span`
  display: block;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 0.25rem;

  color: ${props => props.theme.black_1};
`;

export const Section = styled.div`
  display: block;
  margin-bottom: 1rem;
`;

export const ChoiceContainer = styled.div`
  display: flex;
  padding: 0.25rem 0;
  flex-direction: row;
  align-items: center;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.25rem 0;
  margin: 0.75rem 0 0.25rem 0;
`;

export const CheckboxInput = styled.input`
  margin-right: 0.5rem;
`;

export const BoxText = styled.span`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.black_1};

  &::first-letter {
    text-transform: capitalize;
  }
`;
