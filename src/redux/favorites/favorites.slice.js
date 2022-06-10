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
  },
});

export const { addItem, removeItem } = favoritesSlice.actions;

export default favoritesSlice.reducer;
