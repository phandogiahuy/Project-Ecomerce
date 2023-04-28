import { createSlice } from "@reduxjs/toolkit";
import styled from "styled-components";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quanity: 0,
    quanityItem: 0,
    total: 0,
    type: "",
    size: "",
  },
  reducers: {
    addProduct: (state, action) => {
      const hasProduct = state.products.find(
        (p) =>
          p._id === action.payload.product._id &&
          state.type === action.payload.type
      );
      if (hasProduct) {
        state.quanityItem += 1;
      } else {
        state.products.push(action.payload.product);
        state.type = action.payload.type;
        state.size = action.payload.size;
        state.quanity += 1;
        state.total += action.payload.total;
        state.quanityItem += 1;
      }
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
