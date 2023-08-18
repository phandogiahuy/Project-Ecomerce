import { message } from "antd";
import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const register = async ({ username, email, password }) => {
  const res = await axios.post(`localhost:3000/api/auth/register/`, {
    username,
    email,
    password,
  });
  return res.data;
};
export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation(register, {
    onSuccess: () => {
      message.success("You created successfully");
      navigate("/");
    },
    onError: (e) => {
      message.error(e.response.data.message);
    },
  });
};
