import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    categories: [],
    sizes: [],
    colors: [],
  },
  page: 1,
  sliceProductsBy: 6,
};

export const shopSlice = createSlice({
  name: "shopFilter",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.filter.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      return {
        ...state,
        filter: {
          ...state.filter,
          categories: state.filter.categories.filter(
            item => item !== action.payload
          ),
        },
      };
    },
    addColor: (state, action) => {
      state.filter.colors.push(action.payload);
    },
    removeColor: (state, action) => {
      return {
        ...state,
        filter: {
          ...state.filter,
          colors: state.filter.colors.filter(item => item !== action.payload),
        },
      };
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
    resetPage: state => {
      state.page = 1;
    },
  },
});

export const {
  addCategory,
  removeCategory,
  addColor,
  removeColor,
  changePage,
  resetPage,
} = shopSlice.actions;

export default shopSlice.reducer;
