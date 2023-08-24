import axios from "axios";

import { GET_ORDER_SUCCESS } from "../../../constant/queryKey";
import { useQuery } from "react-query";

const getOrder = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/order/success`);
  return data;
};
const useGetOrderSuccess = () => useQuery(GET_ORDER_SUCCESS, () => getOrder());
export { useGetOrderSuccess };
