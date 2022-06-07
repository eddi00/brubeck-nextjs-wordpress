export const filterProducts = (products, filter) => {
  let temp = products;

  let filterCategories = [];
  for (const [key, value] of Object.entries(filter)) {
    if (value) filterCategories.push(key);
  }

  if (filterCategories.length > 0) {
    temp = temp.filter(item => {
      if (
        filterCategories.every(element => item.categoriesList.includes(element))
      )
        return true;
    });
  }

  return temp;
};
