import React from "react";

export const returnCategoriesList = categories => {
  let array = [];
  Object.values(categories).forEach(category => array.push(category.slug));
  return array;
};

export const returnAttributeList = (attributes, attributeName) => {
  let temp = [];

  if (attributes) {
    attributes.map(item => {
      if (item.name === attributeName) {
        temp.push(...item.options);
      }
    });
  }
  return temp;
};

export const returnMetaValue = (list, keyName) => {
  let value = null;
  if (list) {
    list.map(item => {
      if (item?.key === keyName) {
        value = item.value;
      }
    });
  }

  return value;
};
