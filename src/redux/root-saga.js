import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart/cart.rootSaga";
import { favoritesSagas } from "./favorites/favorites.rootSaga";

export default function* rootSaga() {
  yield all([call(cartSagas), call(favoritesSagas)]);
}
