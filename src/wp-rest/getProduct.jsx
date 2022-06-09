import { WC_Api } from "../axios/wp-woocommerce";
import { returnCategoriesList, returnAttributeList } from "./wp-rest.utils";

export const getProduct = async productId => {
  try {
    const res = await WC_Api.get("products/" + productId);
    return processProduct(res.data);
  } catch (err) {
    console.log(err);
  }
};

const processProduct = object => {
  return {
    id: object.id,
    name: object.name,
    sku: object.sku,
    price: object.price,
    regularPrice: object.regular_price,
    salePrice: object.sale_price,
    onSale: object.on_sale,
    description: object.description,
    categories: object.categories,
    categoriesList: returnCategoriesList(object.categories),
    tags: object.tags,
    images: object.images,
    attributes: object.attributes,
    colorList: returnAttributeList(object.attributes, "Color"),
    sizeList: returnAttributeList(object.attributes, "Size"),
    stockStatus: object.stock_status,
  };
};
