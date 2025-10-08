import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addToWishlist(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          img: newItem.images,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },
    removeFromWishlist(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id != id);
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishListSlice.actions;

export default wishListSlice.reducer;
