import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    // total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      // state.total += action.payload.totalItem;
      const existingItemIndex = state.products.findIndex(
        (item) =>
          item.product._id === action.payload.product._id &&
          item.type === action.payload.type &&
          item.size === action.payload.size
      );
      if (existingItemIndex !== -1) {
        state.products[existingItemIndex].quanity += action.payload.quanity;
      } else {
        state.products.push(action.payload);
      }
    },
    updateProduct: (state, action) => {
      const existingItemIndex = state.products.findIndex(
        (item) =>
          item.product._id === action.payload.products.product._id &&
          item.type === action.payload.products.type &&
          item.size === action.payload.products.size
      );
      state.products[existingItemIndex].quanity = action.payload.quanity;
    },
    removeProduct: (state, action) => {
      const existingItemIndex = state.products.findIndex(
        (item) =>
          item.product._id === action.payload.id &&
          item.type === action.payload.type &&
          item.size === action.payload.size
      );
      if (existingItemIndex !== -1) {
        // state.total = state.total - action.payload.totalItem;
        state.products.splice(existingItemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.products = [];
      // state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, updateProduct, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
