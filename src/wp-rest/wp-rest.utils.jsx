export const returnCategoriesList = categories => {
  let array = [];
  Object.values(categories).forEach(category => array.push(category.slug));
  return array;
};

// export const returnAttributesList = attributes => {

// }
