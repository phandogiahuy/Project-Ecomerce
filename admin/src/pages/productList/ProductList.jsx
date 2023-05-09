import "./productList.css";

import { Radio, Table, Tag, Space, Button } from "antd";
import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useDeleteProduct } from "../../hooks/detail/useDeleteProductById";

export default function ProductList() {
  const { mutate } = useDeleteProduct();

  const [selectionType, setSelectionType] = useState("checkbox");
  const res = useProducts();
  if (res.isLoading) {
    return <div>...loading</div>;
  }
  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      render: (text, record, index) => index,
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
        <img src={img} style={{ width: "20%", height: "20%" }} />
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
          <Button>Edit</Button>
          <Button onClick={() => handleDelete(_id)}>Delete</Button>
        </Space>
      ),
    },
  ];
  const handleDelete = async (_id) => {
    mutate(_id);
  };

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };

  return (
    <div style={{ flex: 4 }}>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      ></Radio.Group>

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        bordered
        columns={columns}
        dataSource={res.data}
      />
    </div>
  );
}
