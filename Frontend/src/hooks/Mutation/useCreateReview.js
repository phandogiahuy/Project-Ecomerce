import { message } from "antd";
import { useMutation, useQueryClient } from "react-query";

import { GET_PRODUCT_ID } from "../../constant/queryKey";
import { axiosInstance } from "../../Service-api/requestMethod";

const postReview = async ({ id, userId, rating, content, username }) => {
  const { data } = await axiosInstance.post(
    `http://localhost:3000/api/reviews/${id}`,
    { userId, username, rating, content }
  );
  return data;
};
const useCreateReview = (handleCancel) => {
  const queryClient = useQueryClient();

  return useMutation(postReview, {
    onSuccess: (data) => {
      handleCancel();
      queryClient.invalidateQueries([GET_PRODUCT_ID], data._id);
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
export { useCreateReview };
