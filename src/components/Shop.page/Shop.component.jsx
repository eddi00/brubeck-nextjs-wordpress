import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  applyCategory,
  applyGender,
  recount,
  resetFilter,
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
  dispatch(setProducts(products));

  useEffect(() => {
    console.log({ category });
    if (!router.isReady) return;

    if (category) {
      dispatch(resetFilter());
      dispatch(applyGender(category));
      dispatch(applyCategory(category));
      dispatch(recount());
    }
  }, [router]);

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
