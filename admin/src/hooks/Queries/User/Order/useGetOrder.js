import { useQuery } from "react-query";

import { GET_ORDER } from "../../../../constant/queryKey";
import { AxiosInstance } from "../../../../service-api/requestMethods";

const getOrder = async () => {
  const { data } = await AxiosInstance.get(
    `https://ecommercecafe.onrender.com/api/order/`
  );
  return data;
};
const useGetOrder = () => useQuery([GET_ORDER], () => getOrder());

export { useGetOrder };
