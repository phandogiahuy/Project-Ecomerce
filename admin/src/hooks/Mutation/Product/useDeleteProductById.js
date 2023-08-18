import { useMutation, useQueryClient } from "react-query";

import { message } from "antd";
import { AxiosInstance } from "../../../service-api/requestMethods";
import { GET_PRODUCTS } from "../../../constant/queryKey";

const deleteProductById = async (id) => {
  const res = await AxiosInstance.delete(
    `https://ecommercecoffee.onrender.com/api/product/${id}`
  );
  return res.data;
};
const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteProductById, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries([GET_PRODUCTS]);
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};

export { useDeleteProduct };
