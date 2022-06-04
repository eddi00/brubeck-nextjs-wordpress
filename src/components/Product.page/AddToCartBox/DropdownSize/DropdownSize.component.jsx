import React from "react";
import {
  ArrowIcon,
  Text,
  DropdownButton,
  DropDownText,
  List,
  ListItem,
  PaletteIcon,
} from "./DropdownSize.styles";

const DropDownSize = ({ setSize, sizeList }) => {
  const handleClickListItem = item => {
    setSize(item);
  };

  return (
    <DropdownButton>
      <PaletteIcon size={20} />
      <DropDownText>Выбрать размер:</DropDownText>
      <ArrowIcon size={24} />
      <List>
        {sizeList.map(item => (
          <ListItem onClick={() => handleClickListItem(item)}>
            <Text>{item}</Text>
          </ListItem>
        ))}
      </List>
    </DropdownButton>
  );
};

export default DropDownSize;
