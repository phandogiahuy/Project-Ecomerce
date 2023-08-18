import { useMutation, useQueryClient } from "react-query";

import { message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showProduct } from "../../reduxToolkit/recommendRedux";
const postProducts = async (selections) => {
  const { data } = await axios.post(`localhost:3000/api/product/recommend`, {
    selections,
  });
  return data;
};
const useRecommendProduct = () => {
  const dispatch = useDispatch();
  return useMutation(postProducts, {
    onSuccess: (data) => {
      dispatch(showProduct(data));
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
export { useRecommendProduct };
