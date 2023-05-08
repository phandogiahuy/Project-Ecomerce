import axios from "axios";
import { store } from "./reduxToolkit/store";
const BASE_URL = "http://localhost:3000/api/";

export const AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

AxiosInstance.interceptors.request.use(
  async (request) => {
    const state = store.getState();
    const accessToken = state.user.currentUser?.accessToken;

    request.headers.Authorization = accessToken
      ? `Bearer ${accessToken}`
      : null;
    request.baseURL = BASE_URL;

    return request;
  },
  (error) => Promise.reject(error)
);
