import axios from "axios";
const BASE_URL = "https://ecommercecoffee.onrender.com/api/";

export const AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

AxiosInstance.interceptors.request.use(
  async (request) => {
    const accessToken = localStorage.getItem("token");
    request.headers.Authorization = accessToken
      ? `Bearer ${accessToken}`
      : null;
    request.baseURL = BASE_URL;

    return request;
  },
  (error) => Promise.reject(error)
);
