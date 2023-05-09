import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "../requestMethod";
import { useMutation } from "react-query";
import { message } from "antd";

const login = async ({ email, password }) => {
  const res = await AxiosInstance.post("/auth/login", {
    email,
    password,
  });
  return res.data;
};
export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation(login, {
    onSuccess: (data) => {
      if (data.email) {
        localStorage.setItem("token", data.accessToken);
        // localStorage.setItem("username", data.email);
        localStorage.setItem("id", data.id);
        navigate("/");
      }
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
