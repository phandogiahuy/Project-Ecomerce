import axios from "axios";
import { useQuery } from "react-query";

import { GET_DISCOUNT_CODE } from "../../constant/queryKey";

const getDiscount = async (code) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/discount/${code}`
  );
  console.log(data);
  return data;
};
const useDiscount = (code) =>
  useQuery([GET_DISCOUNT_CODE, { code }], () => getDiscount(code));
export { useDiscount };
