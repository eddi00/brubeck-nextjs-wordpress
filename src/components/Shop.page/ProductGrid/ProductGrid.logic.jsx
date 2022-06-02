export const filterProducts = (products, filter) => {
  let temp = products;

  if (filter.categories.length > 0) {
    temp = temp.filter(item => {
      if (
        filter.categories.every(element =>
          item.categoriesList.includes(element)
        )
      )
        return true;
    });
  }

  return temp;
};
