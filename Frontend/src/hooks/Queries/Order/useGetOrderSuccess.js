import axios from "axios";
import { useQuery } from "react-query";

import { GET_ORDER_SUCCESS } from "../../../constant/queryKey";

const getOrder = async (id) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/order/success/${id}`
  );
  return data;
};
const useGetOrderSuccess = (id) => useQuery(GET_ORDER_SUCCESS, () => getOrder(id));
export { useGetOrderSuccess };
