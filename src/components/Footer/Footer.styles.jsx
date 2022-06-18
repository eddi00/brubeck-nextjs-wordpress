import styled from "styled-components";
import { LogoText } from "../Header/Header.styles";
import { MdPhone, MdDomain } from "react-icons/md";
import Link from "next/link";

export const Layout = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.primary_color_1};
`;

export const Grid = styled.div`
  margin: 0 auto;
  width: 1168px;
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;

  h5 {
    color: white;
    margin: 0.75rem 0;
  }
`;

export const Logo = styled(LogoText)`
  color: white !important;
`;

export const Line = styled.div`
  height: 0px;
  border-bottom: 1px solid white;
  width: 70%;
`;

export const PhoneIcon = styled(MdPhone)`
  color: white;
  margin-right: 1rem;
`;

export const AddressIcon = styled(MdDomain)`
  color: white;
  margin-right: 1rem;
`;

export const Text = styled.span`
  font-size: 14px;
  font-family: "Open Sans";
  line-height: 20px;
  font-style: normal;
  font-weight: 500;
  color: white;
`;

export const Site = styled(Text)`
  margin-top: 0.75rem;
  display: block;
  cursor: pointer;
`;

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;
