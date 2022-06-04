import React, { useState } from "react";
import {
  ArrowIcon,
  Text,
  DropdownButton,
  DropDownText,
  List,
  ListItem,
  RulerIcon,
} from "./DropdownSize.styles";

const DropDownSize = ({ setSize, sizeList }) => {
  const [show, setShow] = useState(false);

  const handleClickListItem = item => {
    setSize(item);
  };

  return (
    <DropdownButton onClick={() => setShow(!show)}>
      <RulerIcon size={20} />
      <DropDownText>Выбрать размер:</DropDownText>
      <ArrowIcon size={24} />
      <List show={show}>
        {sizeList.map((item, key) => (
          <ListItem key={key} onClick={() => handleClickListItem(item)}>
            <Text>{item}</Text>
          </ListItem>
        ))}
      </List>
    </DropdownButton>
  );
};

export default DropDownSize;
