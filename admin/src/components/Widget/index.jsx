import { format } from "timeago.js";
import { useGetOrder } from "../../hooks/Queries/User/Order/useGetOrder";
import {
  Empty,
  Skeleton,
  Spin,
  Button,
  Popover,
  Modal,
  Table,
  Tag,
  Popconfirm,
  message,
} from "antd";
import {
  FrownTwoTone,
  MinusCircleOutlined,
  PlusCircleTwoTone,
} from "@ant-design/icons";
import Content from "../Transaction";
import { useState } from "react";
import { useUpdateOrder } from "../../hooks/Mutation/Order/useUpdateOrder";
import { useDeleteOrder } from "../../hooks/Mutation/Order/useDeleteOrder";
import { useRevenue } from "../../hooks/Mutation/Revenue/useRevenue";
import { useMutation, useQueryClient } from "react-query";
import { GET_ORDER } from "../../constant/queryKey";
import { useDeleteOrderById } from "../../hooks/Mutation/Order/useDeleteOrderById";

const token = localStorage.getItem("token");

export default function WidgetLg({ orders }) {
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState("");
  const { mutate } = useUpdateOrder();
  const revenue = useRevenue();
  const res = useDeleteOrder();
  const [id, setId] = useState();
  const showModal = (order) => {
    setContent(order);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    mutate({ status: "accepted", id });
    // revenue.mutate({ orders: content });
    // setFilteredOrders([]);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const orderDelete = useDeleteOrderById();
  const cancel = () => {
    message.error("Order don't delete");
  };
  const handleClickDelete = async () => {
    const notSuccessOrders = orders.filter(
      (order) => order.status != "success"
    );
    setFilteredOrders(notSuccessOrders); // Update the filteredOrders state
    message.success("You filter order successfully");
  };
  const columns = [
    {
      title: "ID",
      align: "center",
      dataIndex: "index",
      render: (text, record, index) => <h1>{index + 1}</h1>,
    },
    {
      title: " Customer",
      align: "center",
      dataIndex: "name",
      render: (name) => <p>{name}</p>,
    },
    {
      title: " Date",
      align: "center",
      dataIndex: "createdAt",
      render: (createdAt) => <p>{format(createdAt)}</p>,
    },
    {
      title: " Phone",
      align: "center",
      dataIndex: "phone",
      render: (phone) => <p>0{phone}</p>,
    },
    {
      title: " Payment",
      align: "center",
      dataIndex: "payment",
      render: (payment) => <p>{payment}</p>,
    },
    {
      title: " Total",
      align: "center",
      dataIndex: "total",
      sorter: (a, b) => a.total - b.total,
      render: (total) => <p>{total}$</p>,
    },
    {
      title: " Status",
      align: "center",
      dataIndex: "status",
      render: (status) => {
        let color;
        if (status === "success") {
          color = "#87d068";
        } else if (status === "accepted") {
          color = "#304527";
        } else {
          color = "#f50";
        }
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Action",
      align: "center",
      dataIndex: "",
      render: (order) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="primary"
              onClick={() => {
                setId(order._id);
                showModal(order);
              }}
              style={{ marginRight: "20px" }}
            >
              Show Transaction
            </Button>

            {order.status === "accepted" && (
              <Button
                type="primary"
                style={{ backgroundColor: " #9b4f88" }}
                onClick={() => {
                  handleFinish(order._id);
                }}
              >
                Finished
              </Button>
            )}
            {order.status === "pending" ||
              (order.status === "accepted" && (
                <Popconfirm
                  title="Delete product"
                  description="Are you sure to delete this order, It cannot return"
                  onConfirm={() => handleDelete(order._id)}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button
                    type="primary"
                    style={{ backgroundColor: " #ff4d4f", marginLeft: "40px" }}
                  >
                    Deleted
                  </Button>
                </Popconfirm>
              ))}
          </div>
        );
      },
    },
  ];
  const handleDelete = async (_id) => {
    orderDelete.mutate(_id);
  };
  const handleFinish = async (id) => {
    mutate({ status: "success", id });
  };
  const ordersToDisplay = filteredOrders.length > 0 ? filteredOrders : orders;
  return (
    <div style={{ flex: 1, padding: "5px" }}>
      <h1>Transaction</h1>

      {ordersToDisplay.length == 0 ? (
        <div>
          <Empty />
        </div>
      ) : (
        <>
          <Popconfirm
            title="Delete product"
            description="Are you sure to filter orders, please check carefully because of no return?"
            onConfirm={handleClickDelete}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          ></Popconfirm>
          <Table bordered columns={columns} dataSource={ordersToDisplay} />
          {content.status != "success" ? (
            <Modal
              title="Order"
              open={isModalOpen}
              onCancel={handleCancel}
              onOk={handleOk}
            >
              <Content order={content} />
            </Modal>
          ) : (
            <Modal
              title="Order"
              open={isModalOpen}
              onCancel={handleCancel}
              onOk={handleCancel}
            >
              <Content order={content} />
            </Modal>
          )}
        </>
      )}
    </div>
  );
}
//  <Button
// size="larger"
// style={{
//   backgroundColor: "#4ddb1d",
//   fontSize: "20px",
//   width: "25%",
//   height: "50px",
//   padding: "10px",
//   marginBottom: "10px",
// }}
// icon={<MinusCircleOutlined />}
// >
// Filter Success Transaction
// </Button>
