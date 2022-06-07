import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  applyCategory,
  applyColor,
  applyGender,
  applySize,
  resetPage,
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
    const category = e.target.name.split("-").slice(1).join("-");

    switch (type) {
      // case "cat": {
      //   if (checked) {
      //     dispatch(addCategory(category));
      //   } else {
      //     dispatch(removeCategory(category));
      //   }
      //   break;
      // }
      // case "color":
      //   checked
      //     ? dispatch(addColor(category))
      //     : dispatch(removeColor(category));
      case "color":
        dispatch(applyColor(category));
        break;
      case "cat":
        dispatch(applyCategory(category));
        break;
      case "gen":
        dispatch(applyGender(category));
        break;
      case "size":
        dispatch(applySize(category));
        break;
    }
    dispatch(resetPage());
  };

  return <CheckboxInput {...props} type="checkbox" onChange={handleToggle} />;
};
