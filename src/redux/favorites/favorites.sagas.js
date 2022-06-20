import axios from "axios";
import { getCookie } from "cookies-next";
import { call, put, select } from "redux-saga/effects";
import {
  emptyFavorites,
  joinFavoritesWithUserOnes,
  setUserFavorites,
} from "./favorites.slice";
// import { joinfavorites } from "../../actions/favorites";

export const getFavorites = state => state.favorites;

export function* handleUpdateFavoritesInDB(action) {
  const favorites = yield select(getFavorites);
  const accessToken = getCookie("accessToken");

  if (accessToken) {
    try {
      yield call(() => {
        axios.post("/api/favorites/update", {
          accessToken,
          favoriteItems: favorites.favoriteItems,
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* handleGetFavoritesFromDB(action) {
  const accessToken = getCookie("accessToken");

  if (accessToken) {
    try {
      const res = yield call(() => {
        return axios.post("/api/favorites/get-favorites", {
          accessToken,
        });
      });

      // if (res.data?.favorites === null) return;
      const parsedFavorites = JSON.parse(res.data?.favorites);

      if (parsedFavorites) {
        if (action.payload?.join) {
          yield put(joinFavoritesWithUserOnes(parsedFavorites));
        } else {
          yield put(setUserFavorites(parsedFavorites));
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export function* clearFavoritesOnSignOut() {
  yield put(emptyFavorites());
}
