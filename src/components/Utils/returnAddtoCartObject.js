import { returnColorRuName } from "./returnColorRuName";

export const returnAddToCartObject = (product, size, color, quantity) => {
  let variationId = null;
  if (product.variations.length > 0) {
    product.variations.forEach(item => {
      //console.log(item.size, size, returnColorRuName(color), item.color);
      if (item.size === size && returnColorRuName(color) === item.color)
        variationId = item.id;
    });
  }

  return {
    id: product.id,
    name: product.name,
    size: size,
    color: color,
    categoriesList: product.categoriesList,
    price: product.price,
    sku: product.sku,
    quantity: quantity,
    imageSrc: product.images.length > 0 ? product.images[0].src : null,
    variationId,
  };
};
