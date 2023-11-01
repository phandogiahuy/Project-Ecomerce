import { message } from "antd";
import { useMutation, useQueryClient } from "react-query";

import { GET_USER } from "../../constant/queryKey";
import { axiosInstance } from "../../Service-api/requestMethod";

const change = async ({ username, email, password, id }) => {
  const res = await axiosInstance.put(
    `https://ecommercecafe.onrender.com/api/user/${id}`,
    {
      username,
      email,
      password,
    }
  );
  return res.data;
};
export const useChangeInforUser = () => {
  const queryClient = useQueryClient();

  return useMutation(change, {
    onSuccess: () => {
      message.success("You changed successfully");
      queryClient.invalidateQueries([GET_USER]);
    },
    onError: (e) => {
      message.error(e.response.data.message);
    },
  });
};
