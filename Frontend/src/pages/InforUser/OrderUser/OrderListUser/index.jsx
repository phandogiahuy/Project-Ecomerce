import { Divider } from "antd";
import React from "react";

import ProductListOrder from "./ProductListOrder/Index";

const OrderListUser = ({ data }) => {
  const inputDate = data.createdAt.slice(0, 10);
  const parts = inputDate.split("-");
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];
  // Create a new date string in the desired format
  console.log(data);
  let color;
  const convertedDate = `${day}-${month}-${year}`;
  if (data.status === "pending") {
    color = "black";
  } else {
    color = "blue";
  }
  return (
    <div>
      {(data.status === "pending" || data.status === "accepted") && (
        <div>
          <div
            className="flex items-center justify-between"
            style={{ color: color }}
          >
            <div className="w-[15%] font-mono">{convertedDate}</div>
            <div className="flex w-[70%] flex-col">
              {data.products.map((item) => (
                <ProductListOrder item={item} />
              ))}
            </div>
            <div className="w-[10%] font-mono">{data.total}$</div>
            <div className="w-[10%] font-mono">{data.status}</div>
          </div>

          <Divider />
        </div>
      )}
    </div>
  );
};

export default OrderListUser;
