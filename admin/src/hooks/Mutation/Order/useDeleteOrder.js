import { useMutation, useQueryClient } from "react-query";

import { message } from "antd";
import { AxiosInstance } from "../../../service-api/requestMethods";
import { GET_ORDER } from "../../../constant/queryKey";
const deleteSuccess = async () => {
  const { data } = await AxiosInstance.delete(
    `http://localhost:3000/api/order/success`
  );
  return data;
};
const useDeleteOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteSuccess, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_ORDER]);
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
export { useDeleteOrder };
