import { GET_PRODUCT_ID } from "../../../constant/queryKey";
import { AxiosInstance } from "../../../service-api/requestMethods";
import { useQuery } from "react-query";

const getProductById = async (id) => {
  const { data } = await AxiosInstance.get(
    `https://ecommercecafe.onrender.com/api/product/find/${id}`
  );
  return data;
};
const useGetProductById = (id) =>
  useQuery([GET_PRODUCT_ID, { id }], () => getProductById(id));
export { useGetProductById };
