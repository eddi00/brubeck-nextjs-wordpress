import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart/cart.sagas";

export default function* rootSaga() {
  yield all([call(cartSagas)]);
}
