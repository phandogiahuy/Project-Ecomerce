import { useMutation, useQueryClient } from "react-query";
import { message } from "antd";
import { GET_DISCOUNT } from "../../../constant/queryKey";
import { AxiosInstance } from "../../../service-api/requestMethods";
const deleteDiscountById = async (id) => {
  const res = await AxiosInstance.delete(`localhost:3000/api/discount/${id}`);
  return res.data;
};
const useDeleteDiscount = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteDiscountById, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_DISCOUNT]);
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
export { useDeleteDiscount };
