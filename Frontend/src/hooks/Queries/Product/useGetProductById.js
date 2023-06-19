import axios from "axios";
import { useQuery } from "react-query";

import { GET_PRODUCT_ID } from "../../../constant/queryKey";
import { axiosInstance } from "../../../Service-api/requestMethod";

const getProductById = async (id) => {
  const { data } = await axiosInstance.get(`/product/find/${id}`);

  return data;
};
const useGetProductById = (id) =>
  useQuery([GET_PRODUCT_ID, { id }], () => getProductById(id));
export { useGetProductById };
