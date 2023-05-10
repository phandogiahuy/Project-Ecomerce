import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { GET_PRODUCT_ID } from "../../constant/queryKey";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { AxiosInstance } from "../../requestMethods";

const getProductById = async (id) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/product/find/${id}`
  );
  return data;
};
const edit = async ({ productData, id }) => {
  const { data } = await AxiosInstance.put(
    `http://localhost:3000/api/product/${id}`,
    { ...productData }
  );

  return data;
};
const useProductById = (id) =>
  useQuery([GET_PRODUCT_ID, { id }], () => getProductById(id));

const editProductById = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  return useMutation(edit, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_PRODUCT_ID]);
      navigate("/product");
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
export { useProductById, editProductById };
