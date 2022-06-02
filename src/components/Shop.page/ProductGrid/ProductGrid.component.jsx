import React, { useEffect, useState } from "react";
import Product from "../Product/Product.component";
import { useSelector } from "react-redux";
import { Grid } from "./ProductGrid.styles";
import { filterProducts } from "./ProductGrid.logic";

const ProductGrid = ({ products }) => {
  const shopFilter = useSelector(state => state.shop.filter);
  const page = useSelector(state => state.shop.page);
  const [test, setTest] = useState(products);

  let productsResult = products;

  useEffect(() => {
    // console.log(shopFilter);

    productsResult = filterProducts(products, shopFilter);
    setTest(productsResult);
  }, [shopFilter]);

  return (
    <>
      {test.length > 0 ? (
        <Grid>
          {test.map((item, key) => (
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
