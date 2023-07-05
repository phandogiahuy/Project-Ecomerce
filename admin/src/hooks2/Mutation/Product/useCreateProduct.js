import { useMutation, useQueryClient } from "react-query";

import { GET_PRODUCT_ID } from "../../../constant/queryKey";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "../../../service-api/requestMethods";
const postProducts = async ({ title, categories, desc, price, img }) => {
  const { data } = await AxiosInstance.post(
    `http://localhost:3000/api/product/`,
    { title, categories, desc, price, img }
  );
  return data;
};
const useCreateProducts = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(postProducts, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_PRODUCT_ID]);
      navigate("/product");
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
export { useCreateProducts };
