import { takeEvery, takeLatest } from "redux-saga/effects";
import {
  addItem,
  clearItemFromCart,
  emptyCart,
  modifyItem,
  removeItem,
  getCartSaga,
  joinCartWithUserOne,
} from "./cart.slice";
import {
  clearCartOnSignOut,
  handleGetCartFromDB,
  handleUpdateCartInDB,
} from "./cart.sagas";
import { signOutUser } from "../user/user.slice";

export function* cartSagas() {
  /* When user is signed in */
  yield takeLatest(addItem.type, handleUpdateCartInDB);
  yield takeLatest(removeItem.type, handleUpdateCartInDB);
  yield takeLatest(modifyItem.type, handleUpdateCartInDB);
  yield takeLatest(emptyCart.type, handleUpdateCartInDB);
  yield takeLatest(clearItemFromCart.type, handleUpdateCartInDB);

  /* When user signs in */
  yield takeEvery(getCartSaga.type, handleGetCartFromDB);
  yield takeEvery(joinCartWithUserOne.type, handleUpdateCartInDB);

  /* When user signs out */
  yield takeEvery(signOutUser.type, clearCartOnSignOut);
}
