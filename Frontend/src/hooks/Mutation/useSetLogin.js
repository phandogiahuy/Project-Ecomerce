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
      console.log(data);
      if (data.email) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("email", data.email);
        queryClient.setQueryData([GET_USER], (oldData) => data);
        navigate("/");
      }
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
