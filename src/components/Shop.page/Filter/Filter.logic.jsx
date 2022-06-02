import React from "react";
import { useDispatch } from "react-redux";
import {
  addCategory,
  addColor,
  removeCategory,
  removeColor,
} from "../../../redux/shop/shop.slice";
import { CheckboxInput } from "./Filter.styles";

export const CheckBox = props => {
  const dispatch = useDispatch();

  const handleToggle = e => {
    // console.log(
    //   {
    //     name: e.target.name,
    //     checked: e.target.checked,
    //   },
    //   e.target.name.split("-")[0]
    // );

    //const name = e.target.name;
    const checked = e.target.checked;
    const type = e.target.name.split("-")[0];
    const category = e.target.name.split("-")[1];

    switch (type) {
      case "cat":
        checked
          ? dispatch(addCategory(category))
          : dispatch(removeCategory(category));
        break;
      case "color":
        checked
          ? dispatch(addColor(category))
          : dispatch(removeColor(category));
        break;
    }
  };

  return <CheckboxInput {...props} type="checkbox" onChange={handleToggle} />;
};
