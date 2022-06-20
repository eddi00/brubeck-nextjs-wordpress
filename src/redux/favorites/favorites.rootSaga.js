import { takeEvery, takeLatest } from "redux-saga/effects";
import {
  clearFavoritesOnSignOut,
  handleGetFavoritesFromDB,
  handleUpdateFavoritesInDB,
} from "./favorites.sagas";
import {
  addItem,
  getFavoritesSaga,
  joinFavoritesWithUserOnes,
  removeItem,
} from "./favorites.slice";
import { signOutUser } from "../user/user.slice";

export function* favoritesSagas() {
  /* When user is signed in */
  yield takeEvery(addItem.type, handleUpdateFavoritesInDB);
  yield takeEvery(removeItem.type, handleUpdateFavoritesInDB);

  /* When user signs in */
  yield takeEvery(getFavoritesSaga.type, handleGetFavoritesFromDB);
  yield takeEvery(joinFavoritesWithUserOnes.type, handleUpdateFavoritesInDB);

  /* When user signs out */
  yield takeEvery(signOutUser.type, clearFavoritesOnSignOut);
}
