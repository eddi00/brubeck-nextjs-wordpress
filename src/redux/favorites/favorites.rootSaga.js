import { takeEvery, takeLatest } from "redux-saga/effects";
import {
  clearFavoritesOnSignOut,
  handleGetFavoritesFromDB,
  handleUpdateFavoritesInDB,
} from "./favorites.sagas";
import { addItem, getFavoritesSaga, removeItem } from "./favorites.slice";
import { signOutUser } from "../user/user.slice";

export function* favoritesSagas() {
  /* When user is signed in */
  yield takeLatest(addItem.type, handleUpdateFavoritesInDB);
  yield takeLatest(removeItem.type, handleUpdateFavoritesInDB);

  /* When user signs in */
  yield takeEvery(getFavoritesSaga.type, handleGetFavoritesFromDB);

  /* When user signs out */
  yield takeEvery(signOutUser.type, clearFavoritesOnSignOut);
}
