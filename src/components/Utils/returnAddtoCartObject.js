export const returnAddToCartObject = (product, size, color, quantity) => {
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
  };
};
