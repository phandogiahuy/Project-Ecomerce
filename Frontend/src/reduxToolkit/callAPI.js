import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { publicRequest } from "../requestMethod";
import axios from "axios";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (dispatch, user) => {
  const res = await publicRequest.post("/auth/register", user);
  dispatch(loginSuccess(res.data));
};
