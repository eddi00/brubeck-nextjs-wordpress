import styled from "styled-components";
import { MdOutlineChevronLeft } from "react-icons/md";
import { BsRulers } from "react-icons/bs";

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

  &:hover {
    background-color: ${props => props.theme.secondary_1_color_5};
  }
`;

export const RulerIcon = styled(BsRulers)`
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
  visibility: ${props => (props.show ? "visible" : "hidden")};
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: left;
  top: 3.5rem;
  left: 0px;
  /* margin-top: 10px; */
  border: 1px solid #ededee;
  /* box-shadow: 0px 1px 1px 1px #ededee; */
  border-radius: 10px;

  li {
    border-bottom: 1px solid ${props => props.theme.black_5};
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem 1rem;
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

export const Text = styled.span`
  color: ${props => props.theme.black_1};
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;

  &::first-letter {
    text-transform: capitalize;
  }
`;
