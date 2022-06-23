import axios from "axios";
import { getCookie } from "cookies-next";
import { call, put, select } from "redux-saga/effects";
import {
  emptyFavorites,
  joinFavoritesWithUserOnes,
  setUserFavorites,
} from "./favorites.slice";

export const getFavorites = state => state.favorites;

export function* handleUpdateFavoritesInDB(action) {
  const favorites = yield select(getFavorites);
  const accessToken = getCookie("accessToken");

  if (accessToken) {
    try {
      yield call(() => {
        axios.put("/api/favorites", {
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
        return axios.get("/api/favorites");
      });

      const parsedFavorites = JSON.parse(res.data?.favorites);

      if (parsedFavorites) {
        if (action.payload?.join) {
          yield put(joinFavoritesWithUserOnes(parsedFavorites));
        } else {
          yield put(setUserFavorites(parsedFavorites));
        }
      }
    } catch (error) {
      //console.log(error);
    }
  }
}

export function* clearFavoritesOnSignOut() {
  yield put(emptyFavorites());
}
