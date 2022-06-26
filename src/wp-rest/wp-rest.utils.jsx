import React from "react";
import { WP_RestHttp } from "../axios/wp";

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

export const getRenderedProductPost = async pageId => {
  if (!pageId || pageId.length === 0) return null;
  try {
    const res = await WP_RestHttp.get(`posts/${pageId[0]}?_fields=content`);
    return res.data.content.rendered;
  } catch (err) {
    console.log(err);
    return null;
  }
};
