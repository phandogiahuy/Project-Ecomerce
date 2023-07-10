import React from "react";

import { useGetUser } from "../../../hooks/Queries/User/useGetUser";

const OrderUser = () => {
  const { data } = useGetUser();
  console.log(data);
  return <div>OrderUser</div>;
};

export default OrderUser;
