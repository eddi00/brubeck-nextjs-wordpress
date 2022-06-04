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

const ProductGrid = ({ products }) => {
  const dispatch = useDispatch();

  const shopFilter = useSelector(state => state.shop.filter);
  const page = useSelector(state => state.shop.page);
  const sliceBy = useSelector(state => state.shop.sliceProductsBy);

  const [filteredProducts, setFilteredProducts] = useState();

  useEffect(() => {
    setFilteredProducts(filterProducts(products, shopFilter));
    dispatch(resetPage());
  }, [shopFilter]);

  return (
    <div>
      {filteredProducts && filteredProducts.length > 0 ? (
        <>
          <Pagination productsLength={filteredProducts.length} />
          <Grid>
            {filteredProducts
              .slice((page - 1) * sliceBy, page * sliceBy)
              .map((item, key) => (
                <Product key={key} item={item} />
              ))}
          </Grid>
        </>
      ) : (
        <h3>Нет продуктов по вашему запросу.</h3>
      )}
    </div>
  );
};

export default ProductGrid;

// Trash

// const [slicedProducts, setSlicedProducts] = useState(
//   filteredProducts.slice((page - 1) * sliceBy, page * sliceBy)
// );
// const [slicedProducts, setSlicedProducts] = useState();

// console.log({ shopFilter, page, sliceBy, filterProducts, slicedProducts });
