import { useNavigate } from "react-router-dom";
import {  axiosInstance } from "../api/requestMethod";
import { useMutation, useQueryClient } from "react-query";
import { message } from "antd";
import { GET_USER } from "../constant/queryKey";

const login = async ({ email, password }) => {
  const res = await axiosInstance.post("/auth/login", {
    email,
    password,
  });
  return res.data;
};
export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(login, {
    onSuccess: (data) => {
      if (data.email) {
        localStorage.setItem("token", data.accessToken);
        queryClient.setQueryData([GET_USER], (oldData) => data);
        navigate("/");
      }
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
