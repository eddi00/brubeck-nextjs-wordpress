import { WC_Api } from "../axios/wp-woocommerce";

export const getProductsByCategoryId = async categoryId => {
  try {
    const res = await WC_Api.get("products", {
      category: categoryId,
    });
    return processProductsByCategoryId(res.data);
  } catch (err) {
    console.log(err);
  }
};

const processProductsByCategoryId = object => {
  let temp = [];

  object.map(item => {
    let tempProduct = {
      id: item.id,
      name: item.name,
      sku: item.sku,
      price: item.price,
      regularPrice: item.regular_price,
      salePrice: item.sale_price,
      onSale: item.on_sale,
      description: item.description,
      categories: item.categories,
      tags: item.tags,
      images: item.images,
      attributes: item.attributes,
      stockStatus: item.stock_status,
    };
    temp.push(tempProduct);
  });

  return temp;
};
