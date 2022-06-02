import { WC_Api } from "../axios/wp-woocommerce";
import { returnCategoriesList } from "./wp-rest.utils";

export const getAllProducts = async categoryId => {
  try {
    const res = await WC_Api.get("products");
    return processAllProducts(res.data);
  } catch (err) {
    console.log(err);
  }
};

const processAllProducts = object => {
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
      categoriesList: returnCategoriesList(item.categories),
      tags: item.tags,
      images: item.images,
      attributes: item.attributes,
      stockStatus: item.stock_status,
    };
    temp.push(tempProduct);
  });

  return temp;
};
