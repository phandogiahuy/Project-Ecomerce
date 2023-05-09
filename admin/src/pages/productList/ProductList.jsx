import "./productList.css";

import { Radio, Table, Tag, Space } from "antd";
import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";

const columns = [
  {
    title: "Name",
    dataIndex: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "",
    dataIndex: "img",
    render: () => <img src="{img}" />,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  // {
  //   title: "Tags",
  //   key: "tags",
  //   dataIndex: "tags",
  //   render: (_, { tags }) => (
  //     <div>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? "geekblue" : "green";
  //         if (tag === "loser") {
  //           color = "volcano";
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </div>
  //   ),
  // },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

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

export default function ProductList() {
  const [selectionType, setSelectionType] = useState("checkbox");
  const res = useProducts();
  if (res.isLoading) {
    return <div>...loading</div>;
  }

  console.log(res.data);
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
        columns={columns}
        dataSource={res.data}
      />
    </div>
  );
}
