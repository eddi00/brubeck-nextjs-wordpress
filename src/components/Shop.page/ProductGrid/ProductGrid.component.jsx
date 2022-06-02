import React, { useEffect, useState } from "react";
import Product from "../Product/Product.component";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "./ProductGrid.styles";
import { filterProducts } from "./ProductGrid.logic";
import Pagination from "../Pagination/Pagination.component";
import { changePage } from "../../../redux/shop/shop.slice";

const ProductGrid = ({ products }) => {
  const dispatch = useDispatch();
  const shopFilter = useSelector(state => state.shop.filter);
  const page = useSelector(state => state.shop.page);
  const sliceBy = useSelector(state => state.shop.sliceProductsBy);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [slicedProducts, setSlicedProducts] = useState(
    filteredProducts.slice((page - 1) * sliceBy, page * sliceBy)
  );

  useEffect(() => {
    setFilteredProducts(filterProducts(products, shopFilter));
    dispatch(changePage(1));
  }, [shopFilter]);

  useEffect(() => {
    setSlicedProducts(
      filteredProducts.slice((page - 1) * sliceBy, page * sliceBy)
    );
  }, [page]);

  return (
    <div>
      {filteredProducts.length > 0 ? (
        <>
          <Pagination productsLength={filteredProducts.length} />
          <Grid>
            {slicedProducts.map((item, key) => (
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
