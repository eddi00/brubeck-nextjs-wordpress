import styled from "styled-components";
import { MdOutlineChevronLeft } from "react-icons/md";
import { BsPalette2 } from "react-icons/bs";

export const DropdownButton = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 10px;
  background-color: ${props => props.theme.secondary_1_color_4_25A};
  box-sizing: border-box;
  padding: 0 1rem;
  cursor: pointer;
  position: relative;

  &:focus ul,
  &:hover ul {
    visibility: visible;
    transform: translateY(0%);
    transition-delay: 0s, 0s, 0.3s;
  }
`;

export const PaletteIcon = styled(BsPalette2)`
  margin-right: 0.5rem;
`;

export const DropDownText = styled.span`
  color: ${props => props.theme.black_1};
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
`;

export const ArrowIcon = styled(MdOutlineChevronLeft)`
  transform: rotate(-90deg);
  margin-left: auto;
`;

export const List = styled.ul`
  position: absolute;
  /* visibility: ${props => (props.show ? "visible" : "hidden")}; */
  /* display: ${props => (props.show ? "block" : "none")}; */
  /*   
  transition: visibility 0.1s; */
  visibility: hidden;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: left;
  top: 40px;
  left: 0px;
  margin-top: 10px;
  border: 1px solid #ededee;
  box-shadow: 0px 1px 1px 1px #ededee;

  li {
    border-bottom: 1px solid ${props => props.theme.black_5};
  }

  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem 1rem;
  /* border-radius: 10px; */
  background-color: white;
  &:hover {
    background-color: whitesmoke;
  }
  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &:last-child {
    border-bottom: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const ColorCircle = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50px;
  background-color: ${props => props.color};
  margin-right: 0.75rem;
  border: 1px solid ${props => props.theme.black_4}; ;
`;

export const ColorText = styled.span`
  color: ${props => props.theme.black_1};
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;

  &::first-letter {
    text-transform: capitalize;
  }
`;
