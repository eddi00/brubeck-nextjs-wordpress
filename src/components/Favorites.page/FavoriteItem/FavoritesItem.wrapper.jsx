import React from "react";
import useSWR from "swr";

import FavoriteItem from "./FavoriteItem.component";
import { LoadingCartItem } from "./FavoriteItem.styles";

const fetcher = url => fetch(url).then(res => res.json());

const FavoriteItemWrapper = props => {
  const { id } = props;
  const { data, error } = useSWR(`/api/product/${id}`, fetcher);

  if (error) console.log(error);
  if (!data) return <LoadingCartItem />;

  // console.log(data);

  return <FavoriteItem {...props} cartItem={data} />;
};

export default FavoriteItemWrapper;
