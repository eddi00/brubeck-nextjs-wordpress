import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../../../redux/shop/shop.slice";
import { Layout, Number, NumberContainer } from "./Pagination.styles";

const Pagination = ({ productsLength }) => {
  // console.log(productsLength);
  const dispatch = useDispatch();
  const page = useSelector(state => state.shop.page);
  const sliceBy = useSelector(state => state.shop.sliceProductsBy);
  const totalPages = Math.ceil(productsLength / sliceBy);

  let numMap = [];
  for (let i = 1; i <= totalPages; i++) {
    numMap.push(
      <NumberContainer
        activePage={page == i}
        onClick={() => dispatch(changePage(i))}
        key={i}
      >
        {i}
      </NumberContainer>
    );
  }

  // console.log({ productsLength, sliceBy, totalPages });
  return <Layout>{numMap.map(item => item)}</Layout>;
};

export default Pagination;
