import { useQuery } from "react-query";

import { GET_DISCOUNT } from "../../../constant/queryKey";
import { AxiosInstance } from "../../../service-api/requestMethods";

const getDiscount = async () => {
  const { data } = await AxiosInstance.get(
    `http://localhost:3000/api/discount/`
  );
  return data;
};
const useGetDiscount = () => useQuery([GET_DISCOUNT], () => getDiscount());
export { useGetDiscount };
