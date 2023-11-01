import { useQuery } from "react-query";

import { GET_ORDER } from "../../../../constant/queryKey";
import { AxiosInstance } from "../../../../service-api/requestMethods";

const getOrder = async () => {
  const { data } = await AxiosInstance.get(
    `http://localhost:3000/api/order/`
  );
  return data;
};
const useGetOrder = () => useQuery([GET_ORDER], () => getOrder());

export { useGetOrder };
