import React from "react";
import Filter from "./Filter/Filter.component";
import ProductGrid from "./ProductGrid/ProductGrid.component";
import { Grid, Layout, Title } from "./Shop.styles";

const ShopPage = ({ products }) => {
  return (
    <Layout>
      <Title>Магазин</Title>
      <Grid>
        <Filter />
        <ProductGrid filteredProducts={products} />
      </Grid>
    </Layout>
  );
};

export default ShopPage;
