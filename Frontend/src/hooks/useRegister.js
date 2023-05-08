import { AxiosInstance } from "../requestMethod";

export const useRegister = async ({ username, email, password }) => {
  const res = await AxiosInstance.post("/auth/register", {
    username,
    email,
    password,
  });
  return res.data;
};
