import axios from "axios";
import { useQuery } from "react-query";

import { GET_ORDER_SUCCESS } from "../../../constant/queryKey";

const getOrder = async () => {
  const { data } = await axios.get(
    `https://ecommercecafe.onrender.com/api/order/success`
  );
  return data;
};
const useGetOrderSuccess = () => useQuery(GET_ORDER_SUCCESS, () => getOrder());
export { useGetOrderSuccess };
