import { Empty, Skeleton } from "antd";
import React from "react";

import { useGetOrderSuccess } from "../../../hooks/Queries/Order/useGetOrderSuccess";
import OrderSuccess from "./OrderSuccess";
import { Content, Header } from "./style";

const HistoryUser = () => {
  const { data, isLoading } = useGetOrderSuccess();

  if (isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-col ">
        {data.length > 0 ? (
          <>
            <Header>
              <div className="w-[10%] font-semibold">Date</div>
              <div className="  w-[70%] text-center font-semibold">Name</div>
              <div className="w-[10%] font-semibold">Total</div>
              <div className="w-[10%] font-semibold">Status</div>
            </Header>
            <Content>
              {data.map((value) => (
                <OrderSuccess data={value} key={value._id} />
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

export default HistoryUser;
