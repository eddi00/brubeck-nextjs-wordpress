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
