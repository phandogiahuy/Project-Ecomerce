import { useQuery } from "react-query";

import { GET_DISCOUNT_ID } from "../../../constant/queryKey";
import { AxiosInstance } from "../../../service-api/requestMethods";
const getDiscountById = async (id) => {
  const { data } = await AxiosInstance.get(
    `https://ecommercecafe.onrender.com/api/discount/${id}`
  );
  return data;
};
const useDiscountById = (id) =>
  useQuery([GET_DISCOUNT_ID, { id }], () => getDiscountById(id));
export { useDiscountById };
