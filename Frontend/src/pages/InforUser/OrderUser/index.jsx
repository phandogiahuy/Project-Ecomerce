import { Empty } from "antd";
import React from "react";

import { useGetUser } from "../../../hooks/Queries/User/useGetUser";
import OrderListUser from "./OrderListUser";
import { Content, Header } from "./style";

const OrderUser = () => {
  const { data } = useGetUser();
  return (
    <div>
      <div className="flex flex-col ">
        {data?.order ? (
          <>
            <Header>
              <div className="w-[10%] font-semibold">Date</div>
              <div className="  w-[70%] text-center font-semibold">Name</div>
              <div className="w-[10%] font-semibold">Total</div>
              <div className="w-[10%] font-semibold">Status</div>
            </Header>
            <Content>
              {data.order.map((value) => (
                <OrderListUser data={value} key={value._id} />
              ))}
            </Content>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center p-9 ">
            <div className="text-xl font-medium">
              You don't have transaction or don't sign in
            </div>
            <div>
              <Empty />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderUser;
