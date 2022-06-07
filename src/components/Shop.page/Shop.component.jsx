import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  applyCategory,
  applyGender,
  setProducts,
} from "../../redux/shop/shop.slice";
import Filter from "./Filter/Filter.component";
import ProductGrid from "./ProductGrid/ProductGrid.component";
import { Grid, Layout, Title } from "./Shop.styles";

const ShopPage = ({ products }) => {
  const dispatch = useDispatch();
  console.log({ products });

  const router = useRouter();
  const { category } = router.query;
  console.log({ category });
  dispatch(setProducts(products));

  useEffect(() => {
    if (!router.isReady) return;

    if (category) {
      dispatch(applyGender(category));
      dispatch(applyCategory(category));
    }
  }, [router.isReady]);

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
