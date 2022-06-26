import { WC_Api } from "../axios/wp-woocommerce";
import {
  returnCategoriesList,
  returnAttributeList,
  returnMetaValue,
  getRenderedProductPost,
} from "./wp-rest.utils";

export const getProduct = async productId => {
  try {
    const res = await WC_Api.get("products/" + productId);
    const product = processProduct(res.data);

    product.variations = await getVariations(productId);
    product.renderedPost = await getRenderedProductPost(product.afc_pageId);

    return product;
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
    colorList: returnAttributeList(object.attributes, "Цвет"),
    sizeList: returnAttributeList(object.attributes, "Размер"),
    stockStatus: object.stock_status,
    afc_price:
      returnMetaValue(object.meta_data, "discount_bool") === "1"
        ? returnMetaValue(object.meta_data, "afc_priceDiscount")
        : returnMetaValue(object.meta_data, "priceItem"),
    afc_regularPrice:
      returnMetaValue(object.meta_data, "discount_bool") === "1"
        ? returnMetaValue(object.meta_data, "priceItem")
        : null,
    afc_onSale:
      returnMetaValue(object.meta_data, "discount_bool") === "1" ? true : false,
    afc_salePrice: returnMetaValue(object.meta_data, "afc_priceDiscount"),
    afc_pageId: returnMetaValue(object.meta_data, "productPageId"),
  };
};

const getVariations = async productId => {
  try {
    const res = await WC_Api.get("products/" + productId + "/variations");

    const variations = [];

    if (res.data.length > 0) {
      res.data.forEach(variation =>
        variations.push(processVariation(variation))
      );
    }

    return variations;
  } catch (err) {
    console.log(err);
  }
};

const processVariation = object => {
  return {
    id: object.id,
    sku: object.sku,
    price: object.price,
    regularPrice: object.regular_price,
    salePrice: object.sale_price,
    onSale: object.on_sale,
    // attributes: object.attributes,
    color: returnOption(object.attributes, "Цвет"),
    size: returnOption(object.attributes, "Размер"),
    stockStatus: object.stock_status,
  };
};

const returnOption = (attributes, attributeName) => {
  let result = null;
  if (attributes) {
    attributes.map(item => {
      if (item.name === attributeName) {
        result = item.option;
      }
    });
  }
  return result;
};
