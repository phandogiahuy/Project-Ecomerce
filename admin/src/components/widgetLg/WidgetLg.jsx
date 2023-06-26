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
const token = localStorage.getItem("token");

export default function WidgetLg({ orders }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState();
  const { mutate } = useUpdateOrder();
  const revenue = useRevenue();
  const [id, setId] = useState();
  const res = useDeleteOrder();
  const showModal = (order) => {
    setContent(order);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    mutate({ status: "success", id });
    revenue.mutate({ orders: content });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleClickDelete = () => {
    res.mutate();
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
          <Button
            type="primary"
            onClick={() => {
              setId(order._id);
              showModal(order);
            }}
          >
            Show Transaction
          </Button>
        );
      },
    },
  ];

  return (
    <div style={{ flex: 1, padding: "5px" }}>
      <h1>Transaction</h1>

      {orders.length == 0 ? (
        <div>
          <Empty />
        </div>
      ) : (
        <>
          <Button
            size="larger"
            style={{
              backgroundColor: "#4ddb1d",
              fontSize: "20px",
              width: "25%",
              height: "10%",
              padding: "10px",
              marginBottom: "10px",
            }}
            onClick={handleClickDelete}
            icon={<MinusCircleOutlined />}
          >
            Delete Success Transaction
          </Button>
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
