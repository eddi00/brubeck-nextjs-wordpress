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
    setUserFavorites: (state, action) => {
      state.favoriteItems = action.payload;
    },
    emptyFavorites: (state, action) => {
      return { ...initialState };
    },
    getFavoritesSaga: (state, action) => {},
  },
});

export const {
  addItem,
  removeItem,
  getFavoritesSaga,
  setUserFavorites,
  emptyFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
