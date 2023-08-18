import { useMutation, useQueryClient } from "react-query";

import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { AxiosInstance } from "../../../service-api/requestMethods";
import { GET_ORDER } from "../../../constant/queryKey";
const update = async ({ status, id }) => {
  const { data } = await AxiosInstance.put(`localhost:3000/api/order/${id}`, {
    status,
  });

  return data;
};
const useUpdateOrder = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  return useMutation(update, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_ORDER]);
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
export { useUpdateOrder };
