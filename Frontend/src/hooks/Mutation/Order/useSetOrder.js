import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { message } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showOrder } from "../../../reduxToolkit/orderRedux";

const order = async ({
  name,
  phone,
  mail,
  address,
  products,
  shipping,
  total,
  payment,
}) => {
  console.log(products);
  const res = await axios.post("http://localhost:3000/api/order/", {
    name,
    phone,
    mail,
    products,
    shipping,
    address,
    total,
    payment,
  });
  return res.data;
};

export const useSetOrder = () => {
  const navigate = useNavigate();
  return useMutation(order, {
    onSuccess: (data) => {
      message.success("You ordered successfully");
      // navigate(`/cart/checkout/successful?data=${JSON.stringify(data)}`);
      navigate(`/cart/checkout/successful/`);
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
