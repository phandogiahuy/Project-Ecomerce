import { useMutation, useQueryClient } from "react-query";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { GET_DISCOUNT, GET_DISCOUNT_ID } from "../../../constant/queryKey";
import { AxiosInstance } from "../../../service-api/requestMethods";
const edit = async ({ values, id }) => {
  console.log(values, id);
  const { data } = await AxiosInstance.put(
    `https://ecommercecafe.onrender.com/api/discount/${id}`,
    { ...values }
  );

  return data;
};

const useEditDiscountById = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(edit, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_DISCOUNT]);
      queryClient.invalidateQueries([GET_DISCOUNT_ID]);
      navigate("/discount");
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
export { useEditDiscountById };
