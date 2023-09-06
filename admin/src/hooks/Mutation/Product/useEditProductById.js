import { useMutation, useQueryClient } from "react-query";

import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { AxiosInstance } from "../../../service-api/requestMethods";
import { GET_PRODUCTS, GET_PRODUCT_ID } from "../../../constant/queryKey";
const edit = async ({ productData, id }) => {
  const { data } = await AxiosInstance.put(
    `https://ecommercecafe.onrender.com/api/product/${id}`,
    {
      ...productData,
    }
  );

  return data;
};
const useEditProductById = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  return useMutation(edit, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_PRODUCTS]);
      queryClient.invalidateQueries([GET_PRODUCT_ID]);

      navigate("/product");
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
export { useEditProductById };
