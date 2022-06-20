import { takeEvery, takeLatest } from "redux-saga/effects";

import { signInWithEmail_start, signOutUser } from "../user/user.slice";
import { handleSignInWithEmail } from "./user.sagas";

export function* userSagas() {
  /* When user tries to sign in */
  yield takeEvery(signInWithEmail_start.type, handleSignInWithEmail);

  /* When user signs out */
  // yield takeEvery(signOutUser.type, clearFavoritesOnSignOut);
}
