import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userSlice,
  },
});
