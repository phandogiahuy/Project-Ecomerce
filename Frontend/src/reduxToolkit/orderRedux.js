import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    order: 0,
    // total: 0,
  },
  reducers: {
    showOrder: (state, action) => {
      // state.total += action.payload.totalItem;
      state.order = action.payload;
    },
  },
});

export const { showOrder } = orderSlice.actions;
export default orderSlice.reducer;
