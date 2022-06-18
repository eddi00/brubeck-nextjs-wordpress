import { createSlice, current } from "@reduxjs/toolkit";
import {
  addItemToCart,
  differentItems,
  modifyItemFromCart,
  removeItemFromCart,
} from "./cart.utils";

const initialState = {
  cartItems: [],
  status: "none",
  userCartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems = addItemToCart(current(state.cartItems), action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems = removeItemFromCart(
        current(state.cartItems),
        action.payload
      );
    },
    modifyItem: (state, action) => {
      state.cartItems = modifyItemFromCart(
        current(state.cartItems),
        action.payload?.oldItem,
        action.payload?.newItem
      );
    },
    emptyCart: (state, action) => {
      return {
        ...initialState,
      };
    },
    clearItemFromCart: (state, action) => {
      state.cartItems = current(state.cartItems).filter(cartItem =>
        differentItems(cartItem, action.payload)
      );
    },
    setUserCart: (state, action) => {
      if (current(state.cartItems).length === 0) {
        state.cartItems = action.payload;
      } else {
        state.userCartItems = action.payload;
      }
    },
    getCartSaga: (state, action) => {},
  },
  extraReducers: builder => {},
});

export const {
  addItem,
  removeItem,
  modifyItem,
  emptyCart,
  clearItemFromCart,
  setUserCart,
  getCartSaga,
} = cartSlice.actions;

export default cartSlice.reducer;
