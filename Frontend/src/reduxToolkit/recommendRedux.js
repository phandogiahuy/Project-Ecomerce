import { createSlice } from "@reduxjs/toolkit";

const recommendSlice = createSlice({
  name: "recommend",
  initialState: {
    product: [],
    // total: 0,
  },
  reducers: {
    showProduct: (state, action) => {
      // state.total += action.payload.totalItem;

      if (action.payload.length > 0) {
        state.product = action.payload;
      }
    },
  },
});

export const { showProduct } = recommendSlice.actions;
export default recommendSlice.reducer;
