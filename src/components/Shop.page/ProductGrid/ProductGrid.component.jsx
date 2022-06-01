import React from "react";
import Product from "../Product/Product.component";
import { Grid } from "./ProductGrid.styles";

const ProductGrid = ({ filteredProducts }) => {
  console.log({ filteredProducts });
  return (
    <>
      {filteredProducts.length > 0 ? (
        <Grid>
          {filteredProducts.map((item, key) => (
            <Product key={key} item={item} />
          ))}
        </Grid>
      ) : (
        <h3>Нет продуктов по вашему запросу.</h3>
      )}
    </>
  );
};

export default ProductGrid;
