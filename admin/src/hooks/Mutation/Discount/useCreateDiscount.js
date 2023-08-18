import { useMutation, useQueryClient } from "react-query";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { GET_DISCOUNT } from "../../../constant/queryKey";
import { AxiosInstance } from "../../../service-api/requestMethods";
const post = async ({ code, sale, limit }) => {
  const { data } = await AxiosInstance.post(
    `https://ecommercecoffee.onrender.com/api/discount/`,
    { code, sale, limit }
  );

  return data;
};
const useCreateDiscount = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(post, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_DISCOUNT]);
      navigate("/discount");
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
export { useCreateDiscount };
