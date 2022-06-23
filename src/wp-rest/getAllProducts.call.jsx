import { WC_Api } from "../axios/wp-woocommerce";
import {
  returnAttributeList,
  returnCategoriesList,
  returnMetaValue,
} from "./wp-rest.utils";

export const getAllProducts = async () => {
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
      colorList: returnAttributeList(item.attributes, "Color"),
      sizeList: returnAttributeList(item.attributes, "Size"),
      stockStatus: item.stock_status,
      afc_price:
        returnMetaValue(item.meta_data, "discount_bool") === "1"
          ? returnMetaValue(item.meta_data, "afc_priceDiscount")
          : returnMetaValue(item.meta_data, "priceItem"),
      afc_regularPrice:
        returnMetaValue(item.meta_data, "discount_bool") === "1"
          ? returnMetaValue(item.meta_data, "priceItem")
          : null,
      afc_onSale:
        returnMetaValue(item.meta_data, "discount_bool") === "1" ? true : false,
      afc_salePrice: returnMetaValue(item.meta_data, "afc_priceDiscount"),
    };
    temp.push(tempProduct);
  });

  return temp;
};
