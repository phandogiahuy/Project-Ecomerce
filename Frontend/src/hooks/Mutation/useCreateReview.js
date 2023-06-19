import { useMutation, useQueryClient } from "react-query";

import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { GET_PRODUCT_ID } from "../../constant/queryKey";
import { axiosInstance } from "../../Service-api/requestMethod";
const postReview = async ({ id, nameUser, rating, content }) => {
  const { data } = await axiosInstance.post(
    `http://localhost:3000/api/reviews/${id}`,
    { user: nameUser, rating, content }
  );
  return data;
};
const useCreateReview = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(postReview, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_PRODUCT_ID], data._id);
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
export { useCreateReview };
