import axios from "axios";
import { useQuery } from "react-query";

import { GET_COUPON } from "../../../constant/queryKey";

const getCoupon = async () => {
  const { data } = await axios.get(
    `https://ecommercecoffee.onrender.com/api/discount/`
  );
  return data;
};
const useGetCoupon = () => useQuery([GET_COUPON], getCoupon);
export { useGetCoupon };
