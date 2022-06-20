import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart/cart.rootSaga";
import { favoritesSagas } from "./favorites/favorites.rootSaga";
import { userSagas } from "./user/user.rootSaga";

export default function* rootSaga() {
  yield all([call(cartSagas), call(favoritesSagas), call(userSagas)]);
}
