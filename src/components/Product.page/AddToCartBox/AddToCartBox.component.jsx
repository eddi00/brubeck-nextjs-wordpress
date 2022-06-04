import React, { useState } from "react";
import { returnColorRuName } from "../../Utils/returnColorRuName";
import { handleAddToCart } from "./AddToCart.logic";
import {
  AddToCart,
  AddToCartIcon,
  AddToCartText,
  Container,
  TextGroup,
} from "./AddToCartBox.styles";
import DropdownColor from "./DropdownColor/DropdownColor.component";
import DropDownSize from "./DropdownSize/DropdownSize.component";

const AddToCartBox = ({ product }) => {
  const { colorList, sizeList } = product;
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);

  return (
    <Container>
      {colorList.length > 0 && (
        <DropdownColor colorList={colorList} setColor={setColor} />
      )}
      {sizeList.length > 0 && (
        <DropDownSize sizeList={sizeList} setSize={setSize} />
      )}

      {colorList.length > 0 && (
        <TextGroup>
          <div>Цвет:</div>
          {color ? <div>{returnColorRuName(color)}</div> : <div>Не выбран</div>}
        </TextGroup>
      )}
      {sizeList.length > 0 && (
        <TextGroup>
          <div>Размер:</div>
          {size ? <div>{size}</div> : <div>Не выбран</div>}
        </TextGroup>
      )}

      <AddToCart
        showMargin={colorList.length > 0 || sizeList > 0}
        onClick={() => handleAddToCart(product)}
      >
        <AddToCartIcon size="20" />
        <AddToCartText>Добавить в корзину</AddToCartText>
      </AddToCart>
    </Container>
  );
};

export default AddToCartBox;
