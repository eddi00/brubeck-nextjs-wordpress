import axios from "axios";
import { setCookies } from "cookies-next";
import { call, put, select } from "redux-saga/effects";
import { signInWithEmail_failed, signInWithEmail_success } from "./user.slice";
import jwt_decode from "jwt-decode";
import {
  getFavoritesSaga,
  joinFavoritesWithCloud,
  setUserFavorites,
} from "../favorites/favorites.slice";
import { getCartSaga, setUserCart } from "../cart/cart.slice";

export const getCart = state => state.cart;
export const getFavorites = state => state.favorites;

export function* handleSignInWithEmail(action) {
  console.log(action);
  const { payload } = action;

  /* Log in into account */
  let signInRes;
  try {
    signInRes = yield call(() => {
      return axios.post("/api/auth/signIn", payload.data);
    });
  } catch (error) {
    console.log(error);
    yield put(signInWithEmail_failed("error"));
    return;
  }

  /* Setting the cookie */
  const { data } = signInRes.data;
  setCookies("accessToken", data.jwt, {
    sameSite: true,
    maxAge: 60 * 60 * 24 * 14,
  });

  /* dispatch success action and then redirect to another page */
  yield put(signInWithEmail_success(jwt_decode(data.jwt)));

  /* Depending on the page we are at dispatch different actions */
  if (payload.pathname === "/login") {
    yield put(getFavoritesSaga());
    yield put(getCartSaga());
  }
  if (payload.pathname === "/checkout") {
    yield put(getFavoritesSaga({ join: true }));
    yield put(getCartSaga({ join: true }));
  }
}
