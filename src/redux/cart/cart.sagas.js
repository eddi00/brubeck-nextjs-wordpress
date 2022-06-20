import axios from "axios";
import { getCookie } from "cookies-next";
import { call, put, select } from "redux-saga/effects";
import { emptyCart, joinCartWithUserOne, setUserCart } from "./cart.slice";
// import { joinCart } from "../../actions/cart";

export const getCart = state => state.cart;

export function* handleUpdateCartInDB(action) {
  let cart = yield select(getCart);
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
        if (action.payload?.join) {
          yield put(joinCartWithUserOne(parsedCart));
        } else {
          yield put(setUserCart(parsedCart));
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export function* clearCartOnSignOut() {
  yield put(emptyCart());
}
