import React, { useEffect, useState } from "react";
import Product from "../Product/Product.component";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "./ProductGrid.styles";
import { filterProducts } from "./ProductGrid.logic";
import Pagination from "../Pagination/Pagination.component";
import {
  changePage,
  resetFilter,
  resetPage,
} from "../../../redux/shop/shop.slice";

const ProductGrid = () => {
  const dispatch = useDispatch();

  const filterByCategory = useSelector(state => state.shop.filterByCategory);
  const page = useSelector(state => state.shop.page);
  const sliceBy = useSelector(state => state.shop.sliceProductsBy);
  const filteredProductsShop = useSelector(
    state => state.shop.filteredProducts
  );

  const [filteredProducts, setFilteredProducts] = useState();

  // useEffect(() => {
  //   setFilteredProducts(filterProducts(products, filterByCategory));
  //   dispatch(resetPage());
  // }, [filterByCategory]);

  useEffect(() => {
    setFilteredProducts(filteredProductsShop);
    // dispatch(resetPage());
  }, [filteredProductsShop]);

  return (
    <div>
      {filteredProducts && filteredProducts.length > 0 ? (
        <>
          <Pagination productsLength={filteredProducts.length} />
          <Grid
            emptySpace={
              filteredProducts.slice((page - 1) * sliceBy, page * sliceBy)
                .length < 4
            }
          >
            {filteredProducts
              .slice((page - 1) * sliceBy, page * sliceBy)
              .map((item, key) => (
                <Product key={key} item={item} />
              ))}
          </Grid>
          <Pagination productsLength={filteredProducts.length} />
        </>
      ) : (
        <h3>Нет продуктов по вашему запросу.</h3>
      )}
    </div>
  );
};

export default ProductGrid;
