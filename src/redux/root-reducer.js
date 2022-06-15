import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import shopReducer from "./shop/shop.slice";
import favoritesReducer from "./favorites/favorites.slice";
import userReducer from "./user/user.slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "favorites"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  favorites: favoritesReducer,
});

export default persistReducer(persistConfig, rootReducer);
