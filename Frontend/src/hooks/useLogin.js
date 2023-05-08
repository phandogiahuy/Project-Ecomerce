import { AxiosInstance } from "../requestMethod";

export const useLogin = async ({ email, password }) => {
  const res = await AxiosInstance.post("/auth/login", {
    email,
    password,
  });
  return res.data;
};
