import React, { useEffect } from "react";
import { getCartSaga } from "../../redux/cart/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritesSaga } from "../../redux/favorites/favorites.slice";
import axios from "axios";
import { signInUser, signOutUser } from "../../redux/user/user.slice";
import { getCookie } from "cookies-next";

const GlobalWrapper = props => {
  const dispatch = useDispatch();
  const accessToken = getCookie("accessToken");

  useEffect(() => {
    // console.log("AUTH useEffect");
    const validateUser = async () => {
      if (accessToken) {
        try {
          await axios.post("/api/auth/validate", {
            accessToken,
          });
          dispatch(signInUser());
          dispatch(getCartSaga());
          dispatch(getFavoritesSaga());
        } catch (err) {
          // console.log(err);
          dispatch(signOutUser());
        }
      }
    };
    validateUser();
  }, []);

  return { ...props.children };
};

export default GlobalWrapper;
