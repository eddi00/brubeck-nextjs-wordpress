import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  favoriteItems: {},
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.favoriteItems[action.payload] = true;
    },
    removeItem: (state, action) => {
      delete state.favoriteItems[action.payload];
    },
    emptyFavorites: (state, action) => {
      return { ...initialState };
    },
    getFavoritesSaga: (state, action) => {},

    setUserFavorites: (state, action) => {
      state.favoriteItems = action.payload;
    },
    joinFavoritesWithUserOnes: (state, action) => {
      state.favoriteItems = {
        ...action.payload,
        ...current(state.favoriteItems),
      };
    },
  },
});

export const {
  addItem,
  removeItem,
  getFavoritesSaga,
  setUserFavorites,
  emptyFavorites,
  joinFavoritesWithUserOnes,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
