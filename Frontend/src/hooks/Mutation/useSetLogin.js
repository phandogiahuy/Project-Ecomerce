import { message } from "antd";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import { GET_PRODUCT_ID, GET_USER } from "../../constant/queryKey";
import { axiosInstance } from "../../Service-api/requestMethod";

const login = async ({ email, password }) => {
  const res = await axiosInstance.post("/auth/login", {
    email,
    password,
  });
  return res.data;
};
export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation(login, {
    onSuccess: (data) => {
      if (data.email) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("id", data.id);
        localStorage.setItem("name", data.username);
        queryClient.setQueryData([GET_USER], () => data);
        queryClient.invalidateQueries([GET_PRODUCT_ID]);
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
        localStorage.setItem("id", data.id);
        localStorage.setItem("name", data.username);
        queryClient.setQueryData([GET_USER], () => data);
      }
      navigate(-1);
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
