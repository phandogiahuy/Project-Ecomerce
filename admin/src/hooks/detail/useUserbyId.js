import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { message } from "antd";
import { GET_USER, GET_USER_ID } from "../../constant/queryKey";
import { AxiosInstance } from "../../requestMethods";

const getUserById = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/api/user/find/${id}`);
  return data;
};
const useUsertById = (id) =>
  useQuery([GET_USER_ID, { id }], () => getUserById(id));

const deleteUserById = async (id) => {
  const res = await AxiosInstance.delete(
    `http://localhost:3000/api/user/${id}`
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
export { useUsertById, useDeleteUser };
