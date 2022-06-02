export const filterProducts = (products, filter) => {
  let temp = products;

  console.log(filter.categories.length);
  console.log(filter.categories);

  if (filter.categories.length > 0) {
    temp = temp.filter(item => {
      let productCategories = returnCategoriesArray(item.categories);
      console.log({ productCategories });
      // productCategories.forEach(productcategory => {
      //   if (filter.categories.includes(productcategory)) return item;
      // });

      let ar = filter.categories.every(element =>
        productCategories.includes(element)
      );

      let test2 = productCategories.every(element => {
        return filter.categories.includes(element);
      });
      console.log(item.name);
      console.log(ar);
      if (ar) return true;
    });
  }
  console.log({ temp });
  return temp;
};

const returnCategoriesArray = categories => {
  let array = [];
  Object.values(categories).forEach(category => array.push(category.slug));
  return array;
};
