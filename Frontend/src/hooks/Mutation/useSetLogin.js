import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../Service-api/requestMethod";
import { useMutation, useQueryClient } from "react-query";
import { message } from "antd";
import { GET_USER } from "../../constant/queryKey";

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
        localStorage.setItem("email", data.email);
        localStorage.setItem("name", data.name);
        queryClient.setQueryData([GET_USER], (oldData) => data);
      }
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};

export const useLoginPageProduct = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(login, {
    onSuccess: (data) => {
      if (data.email) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("email", data.email);
        localStorage.setItem("name", data.name);
        queryClient.setQueryData([GET_USER], (oldData) => data);
      }
      navigate(-1);
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
