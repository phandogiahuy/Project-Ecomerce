import { Divider } from "antd";
import React from "react";
import ProductListOrder from "../../OrderUser/OrderListUser/ProductListOrder";

const OrderSuccess = ({ data }) => {
  const inputDate = data.createdAt.slice(0, 10);
  const parts = inputDate.split("-");
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];
  // Create a new date string in the desired format
  console.log(data);
  let color;
  const convertedDate = `${day}-${month}-${year}`;

  return (
    <div>
      <div
        className="flex items-center justify-between"
        style={{ color: "indigo" }}
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
  );
};

export default OrderSuccess;
