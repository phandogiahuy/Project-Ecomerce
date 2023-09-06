import { Table, Tag, Space, Button, Skeleton, Affix, Image, Modal } from "antd";
import { EyeTwoTone } from "@ant-design/icons";
import { useGetProducts } from "../../hooks/Queries/Product/useGetProducts";
import { useGetProductComment } from "../../hooks/Queries/Product/useGetProductComment";
import CommentList from "./CommentList";
import { useState } from "react";

export default function Comment() {
  const { isLoading, data } = useGetProductComment();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState();
  const showModal = (_id) => {
    setContent(_id);
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  if (isLoading) {
    return <Skeleton active />;
  }
  console.log(data);

  const columns = [
    {
      title: "ID",
      align: "center",
      dataIndex: "_id",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      align: "center",
      dataIndex: "title",
      render: (title) => <h1>{title}</h1>,
    },
    {
      title: "Image",
      align: "center",
      dataIndex: "img",
      render: (img) => <Image src={img} width={150} />,
    },
    {
      title: "Comment",
      align: "center",
      dataIndex: "reviews",
      render: (reviews) => <h1>{reviews.length}</h1>,
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      render: (_id) => (
        <Space size="middle">
          <Button
            icon={<EyeTwoTone />}
            style={{ backgroundColor: "#a8ffc8" }}
            onClick={() => {
              // setId(order._id);
              showModal(_id);
            }}
          >
            Show comment
          </Button>
        </Space>
      ),
    },
  ];

  // rowSelection object indicates the need for row selection

  return (
    <div style={{ flex: 1, padding: "20px" }}>
      <Affix>
        <center
          style={{
            fontWeight: 700,
            fontSize: "60px",
            backgroundColor: "blanchedalmond",
          }}
        >
          COMMENT
        </center>
      </Affix>
      <Table bordered columns={columns} dataSource={data} sticky />
      <Modal title="Product" open={isModalOpen} onCancel={handleCancel}>
        <CommentList content={content} />
      </Modal>
    </div>
  );
}
