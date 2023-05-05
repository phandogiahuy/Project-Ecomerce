import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { AxiosInstance } from "../requestMethod";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await AxiosInstance.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (dispatch, user) => {
  const res = await AxiosInstance.post("/auth/register", user);
  dispatch(loginSuccess(res.data));
};
