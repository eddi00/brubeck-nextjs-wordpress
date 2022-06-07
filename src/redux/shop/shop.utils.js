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
