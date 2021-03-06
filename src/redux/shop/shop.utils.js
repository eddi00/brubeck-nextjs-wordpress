export const countByGender = (products, gender) => {
  let temp = products.filter(item => item.categoriesList.includes(gender));

  return temp.length;
};

export const countByCategory = (products, category) => {
  let temp = products.filter(item => item.categoriesList.includes(category));

  return temp.length;
};

export const countBySize = (products, size) => {
  let temp = products.filter(item => item.sizeList.includes(size));

  return temp.length;
};

export const countByColor = (products, color) => {
  let temp = products.filter(item => item.colorList.includes(color));

  return temp.length;
};

export const returnFilterColor = products => {
  let filterColor = {};
  products.map(product =>
    product.colorList.map(color => {
      if (!filterColor[color]) {
        filterColor[color] = {
          checked: false,
          count: 1,
        };
      } else {
        filterColor[color].count += 1;
      }
    })
  );

  return filterColor;
};

export const returnFilteredProductsByCategory = (products, filterArray) => {
  let temp = products.filter(item => {
    if (filterArray.some(element => item.categoriesList.includes(element)))
      return true;
  });
  return temp;
};

export const returnFilteredProductsBySize = (products, filterArray) => {
  let temp = products.filter(item => {
    if (filterArray.some(element => item.sizeList.includes(element)))
      return true;
  });
  return temp;
};

export const returnFilteredProductsByColor = (products, filterArray) => {
  let temp = products.filter(item => {
    if (filterArray.some(element => item.colorList.includes(element)))
      return true;
  });
  return temp;
};

export const returnSortedProductsByPrice = (products, sortType) => {
  if (products.length === 0) return products;

  let temp = [];
  switch (sortType) {
    case "expensiveFirst":
      temp = products.sort((a, b) =>
        parseFloat(a.afc_price) < parseFloat(b.afc_price) ? 1 : -1
      );
      break;
    case "cheapFirst":
      temp = products.sort((a, b) =>
        parseFloat(a.afc_price) > parseFloat(b.afc_price) ? 1 : -1
      );
      break;
    default:
      temp = products;
      break;
  }
  return temp;
};
