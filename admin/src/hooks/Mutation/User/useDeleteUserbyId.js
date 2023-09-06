import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { message } from "antd";
import { GET_USER, GET_USER_ID } from "../../../constant/queryKey";
import { AxiosInstance } from "../../../service-api/requestMethods";

const deleteUserById = async (id) => {
  const res = await AxiosInstance.delete(
    `https://ecommercecafe.onrender.com/api/user/${id}`
  );
  return res.data;
};
const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteUserById, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_USER]);
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
export { useDeleteUser };
