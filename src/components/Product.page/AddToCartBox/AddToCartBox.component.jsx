import React, { useState } from "react";
import { returnColorRuName } from "../../Utils/returnColorRuName";
import { useDispatch } from "react-redux";
import {
  AddToCart,
  AddToCartIcon,
  AddToCartText,
  Container,
  ErrorContainer,
  TextGroup,
} from "./AddToCartBox.styles";
import DropdownColor from "./DropdownColor/DropdownColor.component";
import DropDownSize from "./DropdownSize/DropdownSize.component";
import { addItem } from "../../../redux/cart/cart.actions";
import { returnAddToCartObject } from "../../Utils/returnAddtoCartObject";

const AddToCartBox = ({ product, setShowSuccess }) => {
  const dispatch = useDispatch();
  const { colorList, sizeList } = product;
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [showError, setShowError] = useState(false);

  const handleAddToCart = () => {
    if (colorList.length > 0 && color === null) {
      setShowError(true);
    } else if (sizeList.length > 0 && size === null) {
      setShowError(true);
    } else {
      let tempProduct = returnAddToCartObject(product, size, color, quantity);

      dispatch(addItem(tempProduct));
      setShowSuccess(true);
    }
  };

  const handleQuantity = e => {
    setQuantity(parseInt(e.target.value));
  };

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

      <TextGroup>
        <div>Количество:</div>
        <select onChange={e => handleQuantity(e)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </TextGroup>

      <AddToCart
        // showMargin={colorList.length > 0 || sizeList > 0}
        showMargin
        onClick={() => handleAddToCart(product)}
      >
        <AddToCartIcon size="20" />
        <AddToCartText>Добавить в корзину</AddToCartText>
      </AddToCart>

      {showError && (
        <ErrorContainer>Выберите сначала цвет и размер!</ErrorContainer>
      )}
    </Container>
  );
};

export default AddToCartBox;
