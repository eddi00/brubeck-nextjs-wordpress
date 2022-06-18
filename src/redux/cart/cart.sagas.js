// import { all, call, put, takeLatest } from "redux-saga/effects";
// import UserActionTypes from "../user/user.types";
// import { clearCart } from "./cart.actions";

import axios from "axios";
import { getCookie } from "cookies-next";
import { call, put, select } from "redux-saga/effects";
import { emptyCart, setUserCart } from "./cart.slice";
// import { joinCart } from "../../actions/cart";

export const getCart = state => state.cart;

export function* handleUpdateCartInDB(action) {
  let cart = yield select(getCart);

  //console.log("SAGA", action, cart);
  const accessToken = getCookie("accessToken");

  if (accessToken) {
    try {
      yield call(() => {
        axios.post("/api/cart/update", {
          accessToken,
          cartItems: cart.cartItems,
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* handleGetCartFromDB(action) {
  // try {
  //   const response = yield call(requestGetCartFromDB);
  //   console.log("requestGetCartFromDB response", response);
  //   /* const { data } = response;
  //   console.log("DATA parsed from -get cart from db request-", JSON.parse(data)); */
  //   if (response) {
  //     const parsed = JSON.parse(response.data);
  //     console.log("parsed", parsed);
  //     if (parsed) {
  //       yield put(joinCart(parsed));
  //     }
  //   }
  //   //Should call add product to Cart for every entry in data
  // } catch (error) {
  //   console.log(error);
  // }
  console.log("handleGetCartFromDB called");
  const accessToken = getCookie("accessToken");

  if (accessToken) {
    try {
      const res = yield call(() => {
        return axios.post("/api/cart/get-cart", {
          accessToken,
        });
      });

      const parsedCart = JSON.parse(res.data?.cart);

      if (parsedCart) {
        yield put(setUserCart(parsedCart));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export function* clearCartOnSignOut() {
  yield put(emptyCart());
}
