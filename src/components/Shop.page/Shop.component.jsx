import React from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/shop/shop.slice";
import Filter from "./Filter/Filter.component";
import ProductGrid from "./ProductGrid/ProductGrid.component";
import { Grid, Layout, Title } from "./Shop.styles";

const ShopPage = ({ products }) => {
  console.log({ products });
  const dispatch = useDispatch();
  dispatch(setProducts(products));

  return (
    <Layout>
      <Title>Магазин</Title>
      <Grid>
        <Filter products={products} />
        <ProductGrid />
      </Grid>
    </Layout>
  );
};

export default ShopPage;
