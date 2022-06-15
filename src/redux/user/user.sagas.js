// import { all, call, put, takeLatest } from "redux-saga/effects";
// import { emailSignInStart, signInFailure } from "./user.slice";

// export function* signInWithEmail({ payload: { email, password } }) {
//   try {
//     //const { user } = yield signInWithEmailAndPassword(email, password);

//     //const res = yield axios.post("/api/auth/signIn", { email, password });
//     const res = yield call(axios.post, "/api/auth/signIn", { email, password });
//     console.log(res);
//   } catch (error) {
//     yield put(signInFailure(error));
//   }
// }

// export function* signOut() {
//   // try {
//   //   yield auth.signOut();
//   //   yield put(signOutSuccess());
//   // } catch (error) {
//   //   yield put(signOutFailure(error));
//   // }
// }

// export function* onEmailSignInStart() {
//   yield takeLatest(emailSignInStart, signInWithEmail);
// }

// // export function* onCheckUserSession() {
// //   yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
// // }

// // export function* onSignOutStart() {
// //   yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
// // }

// export function* userSagas() {
//   yield all([
//     call(onEmailSignInStart),
//     // call(onCheckUserSession),
//     // call(onSignOutStart),
//   ]);
// }
