import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addColor,
  addGender,
  applyCategory,
  applyGender,
  removeCategory,
  removeColor,
  removeGender,
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
      // case "cat": {
      //   if (checked) {
      //     dispatch(addCategory(category));
      //   } else {
      //     dispatch(removeCategory(category));
      //   }
      //   break;
      // }
      case "cat": {
        dispatch(applyCategory(category));
      }
      case "color":
        checked
          ? dispatch(addColor(category))
          : dispatch(removeColor(category));
        break;
      case "gen":
        dispatch(applyGender(category));
        break;
    }
  };

  return <CheckboxInput {...props} type="checkbox" onChange={handleToggle} />;
};
