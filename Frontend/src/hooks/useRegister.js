import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "../requestMethod";
import { useMutation } from "react-query";
import { message } from "antd";

const register = async ({ username, email, password }) => {
  const res = await AxiosInstance.post("/auth/register", {
    username,
    email,
    password,
  });
  return res.data;
};
export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation(register, {
    onSuccess: (data) => {
      localStorage.setItem("username", data.email);
      navigate("/");
    },
    onError: (e) => {
      message.error(e.response.data.message);
    },
  });
};
