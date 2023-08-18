import { message } from "antd";
import axios from "axios";
import { useMutation } from "react-query";

const getDiscount = async ({ code }) => {
  const { data } = await axios.get(`localhost:3000/api/discount/find/${code}`);
  return data;
};
const useGetDiscountByCode = () =>
  useMutation(getDiscount, {
    onError(error) {
      message.error(error.response.data.message);
    },
  });
export { useGetDiscountByCode };
