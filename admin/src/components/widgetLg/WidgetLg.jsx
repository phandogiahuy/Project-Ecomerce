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
import Content from "../contentTransaction";
import { useState } from "react";
import { useUpdateOrder } from "../../hooks/Mutation/Order/useUpdateOrder";
import { useDeleteOrder } from "../../hooks/Mutation/Order/useDeleteOrder";
import { useRevenue } from "../../hooks/Mutation/Revenue/useRevenue";
import { useMutation, useQueryClient } from "react-query";
import { GET_ORDER } from "../../constant/queryKey";
import { useDeleteOrderById } from "../../hooks/Mutation/Order/useDeleteOrderById";

const token = localStorage.getItem("token");

export default function WidgetLg({ orders }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState();
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
    message.success("You deleted order successfully");
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
            {order.status === "pending" && (
              <Popconfirm
                title="Delete product"
                description="Are you sure to delete this order, It cannot return"
                onConfirm={() => handleDelete(order._id)}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" style={{ backgroundColor: " #9b4f88" }}>
                  Deleted
                </Button>
              </Popconfirm>
            )}
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
  return (
    <div style={{ flex: 1, padding: "5px" }}>
      <h1>Transaction</h1>

      {orders.length == 0 ? (
        <div>
          <Empty />
        </div>
      ) : (
        <>
          <Popconfirm
            title="Delete product"
            description="Are you sure to delete this order, please check carefully because of no return?"
            onConfirm={handleClickDelete}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button
              size="larger"
              style={{
                backgroundColor: "#4ddb1d",
                fontSize: "20px",
                width: "25%",
                height: "50px",
                padding: "10px",
                marginBottom: "10px",
              }}
              icon={<MinusCircleOutlined />}
            >
              Delete Success Transaction
            </Button>
          </Popconfirm>
          <Table bordered columns={columns} dataSource={orders} />
          <Modal
            title="Order"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Content order={content} />
          </Modal>
        </>
      )}
    </div>
  );
}
