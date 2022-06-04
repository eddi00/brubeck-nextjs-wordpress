import React, { useState } from "react";
import { returnColorRuName } from "../../../Utils/returnColorRuName";
import { returnHexColor } from "../../../Utils/returnHexColor";
import {
  ArrowIcon,
  ColorCircle,
  ColorText,
  DropdownButton,
  DropDownText,
  List,
  ListItem,
  PaletteIcon,
} from "./DropdownColor.styles";

const DropdownColor = ({ setColor, colorList }) => {
  const handleClickListItem = item => {
    setColor(item);
  };

  return (
    <DropdownButton>
      <PaletteIcon size={20} />
      <DropDownText>Выбрать цвет</DropDownText>
      <ArrowIcon size={24} />
      <List>
        {colorList.map(item => (
          <ListItem onClick={() => handleClickListItem(item)}>
            <ColorCircle color={returnHexColor(item)} />
            <ColorText>{returnColorRuName(item)}</ColorText>
          </ListItem>
        ))}
      </List>
    </DropdownButton>
  );
};

export default DropdownColor;
