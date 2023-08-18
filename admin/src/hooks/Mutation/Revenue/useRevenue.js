import { useMutation } from "react-query";

import { message } from "antd";
import { AxiosInstance } from "../../../service-api/requestMethods";
const postRevenue = async ({ orders }) => {
  const { data } = await AxiosInstance.post(`localhost:3000/api/revenue/`, {
    orders,
  });
  return data;
};
const useRevenue = () => {
  return useMutation(postRevenue, {
    onSuccess: (data) => {},
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
export { useRevenue };
