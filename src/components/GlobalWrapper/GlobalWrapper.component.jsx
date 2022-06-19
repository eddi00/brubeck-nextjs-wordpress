import React, { useEffect } from "react";
import { getCartSaga } from "../../redux/cart/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritesSaga } from "../../redux/favorites/favorites.slice";
import axios from "axios";
import { signInUser, signOutUser } from "../../redux/user/user.slice";
import { getCookie } from "cookies-next";

const GlobalWrapper = props => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);
  const accessToken = getCookie("accessToken");

  // useEffect(() => {
  //   if (currentUser) {
  //   }
  // }, [currentUser]);

  useEffect(() => {
    console.log("AUTH useEffect");
    if (accessToken) {
      try {
        axios.post("/api/auth/validate", {
          accessToken,
        });
        dispatch(signInUser());
        dispatch(getCartSaga());
        dispatch(getFavoritesSaga());
      } catch (err) {
        console.log(err);
        dispatch(signOutUser());
      }
    }
  }, []);

  return { ...props.children };
};

export default GlobalWrapper;
