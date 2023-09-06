import { useQuery } from "react-query";

import { GET_DISCOUNT } from "../../../constant/queryKey";
import { AxiosInstance } from "../../../service-api/requestMethods";

const getDiscount = async () => {
  const { data } = await AxiosInstance.get(
    `https://ecommercecafe.onrender.com/api/discount/`
  );
  return data;
};
const useGetDiscount = () => useQuery([GET_DISCOUNT], () => getDiscount());
export { useGetDiscount };
