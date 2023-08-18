import { useMutation, useQueryClient } from "react-query";

import { message } from "antd";
import { AxiosInstance } from "../../../service-api/requestMethods";
import { GET_ORDER } from "../../../constant/queryKey";
const deleteId = async (_id) => {
  const { data } = await AxiosInstance.delete(
    `http://localhost:3000/api/order/${_id}`
  );

  return data;
};
const useDeleteOrderById = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteId, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_ORDER]);
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
export { useDeleteOrderById };
