import "./productList.css";

import { Table, Tag, Space, Button, Image } from "antd";
import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useDeleteProduct } from "../../hooks/detail/useDeleteProductById";
import { Link } from "react-router-dom";

export default function ProductList() {
  const { mutate } = useDeleteProduct();

  const res = useProducts();
  if (res.isLoading) {
    return <div>...loading</div>;
  }
  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "title",
      render: (text) => <h1>{text}</h1>,
    },
    {
      title: "",
      dataIndex: "img",
      render: (img) => (
        <Image src={img} style={{ width: "50%", height: "20%" }} />
      ),
    },
    {
      title: "Tags",
      key: "categories",
      dataIndex: "categories",
      render: (array) => (
        <div>
          {array.map((tag) => {
            let color;
            if (tag === "sale") {
              color = "red";
            }
            if (tag === "phin") {
              color = "geekblue";
            }
            if (tag === "espresso") {
              color = "green";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (array) => <h2>{array[0]}$</h2>,
    },

    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      render: (_id) => (
        <Space size="middle">
          <Link to={`/edit/` + _id}>
            <Button>Edit</Button>
          </Link>
          <Button onClick={() => handleDelete(_id)}>Delete</Button>
        </Space>
      ),
    },
  ];
  const handleDelete = async (_id) => {
    mutate(_id);
  };

  // rowSelection object indicates the need for row selection

  return (
    <div style={{ flex: 1 }}>
      <Table bordered columns={columns} dataSource={res.data} />
    </div>
  );
}
