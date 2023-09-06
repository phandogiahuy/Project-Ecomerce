import axios from "axios";

const BASE_URL = "https://ecommercecafe.onrender.com/api/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
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
