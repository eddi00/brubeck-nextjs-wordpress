import React, { useEffect } from "react";
import { getCartSaga } from "../../redux/cart/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritesSaga } from "../../redux/favorites/favorites.slice";

const GlobalWrapper = props => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
    if (currentUser) {
      dispatch(getCartSaga());
      dispatch(getFavoritesSaga());
    }
  }, [currentUser]);

  return { ...props.children };
};

export default GlobalWrapper;
