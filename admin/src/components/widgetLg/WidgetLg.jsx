import "./widgetLg.css";
import { format } from "timeago.js";
import { useGetOrder } from "../../hooks/Queries/User/Order/useGetOrder";
import { Empty, Skeleton, Spin, Button, Popover, Modal } from "antd";
import { FrownTwoTone } from "@ant-design/icons";
import Content from "../contentTransaction";
import { useState } from "react";
export default function WidgetLg() {
  const { isLoading, data: orders, isError } = useGetOrder();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState();
  const showModal = (order) => {
    setContent(order);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  if (isLoading) {
    return (
      <div>
        <Spin />
      </div>
    );
  }
  if (isError) {
    return (
      <h1 style={{ fontSize: "30px" }}>
        {" "}
        <FrownTwoTone />
        You don't sign in
      </h1>
    );
  }
  console.log(orders);
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Transactions</h3>
      {orders.length == 0 ? (
        <div>
          <Empty />
        </div>
      ) : (
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Phone</th>
            <th className="widgetLgTh">Type</th>
            <th className="widgetLgTh">Total</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          {orders.map((order) => (
            <tr className="widgetLgTr" key={order._id}>
              <td className="widgetLgUser">{order.name}</td>
              <td className="widgetLgDate">{format(order.createdAt)}</td>
              <td className="widgetLgAmount">0{order.phone}</td>
              <td className="widgetLgType">{order.payment}</td>
              <td className="widgetLgStatus">{order.total} $</td>
              <td className="widgetLgStatus">{order.status}</td>
              <td className="widgetLgStatus">
                <Button
                  type="primary"
                  onClick={() => {
                    showModal(order);
                  }}
                >
                  Show Transaction
                </Button>
              </td>
            </tr>
          ))}
        </table>
      )}
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Content order={content} />
      </Modal>
    </div>
  );
}
