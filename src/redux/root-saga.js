import { all, call, take, takeEvery, takeLatest } from "redux-saga/effects";
import {
  addItem,
  clearItemFromCart,
  emptyCart,
  modifyItem,
  removeItem,
  getCartSaga,
} from "./cart/cart.slice";
import {
  clearCartOnSignOut,
  handleGetCartFromDB,
  handleUpdateCartInDB,
} from "./cart/cart.sagas";
import { signOutUser } from "./user/user.slice";

export default function* rootSaga() {
  yield all([call(cartSagas)]);
}

export function* cartSagas() {
  yield takeLatest(addItem.type, handleUpdateCartInDB);
  yield takeLatest(removeItem.type, handleUpdateCartInDB);
  yield takeLatest(modifyItem.type, handleUpdateCartInDB);
  yield takeLatest(emptyCart.type, handleUpdateCartInDB);
  yield takeLatest(clearItemFromCart.type, handleUpdateCartInDB);

  yield takeLatest(signOutUser.type, clearCartOnSignOut);
  yield takeEvery(getCartSaga.type, handleGetCartFromDB);
}
