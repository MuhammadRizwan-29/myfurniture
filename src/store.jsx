import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import wistlistReducer from "./slice/wishlistSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wistlistReducer,
  },
});

export default store;
