import {
  Table,
  Tag,
  Space,
  Button,
  Image,
  Skeleton,
  Affix,
  Switch,
} from "antd";
import {
  DeleteTwoTone,
  DownSquareOutlined,
  EditTwoTone,
  PlusCircleTwoTone,
} from "@ant-design/icons";

import { useGetProducts } from "../../hooks/Queries/Product/useGetProducts";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDeleteProduct } from "../../hooks/Mutation/Product/useDeleteProductById";

export default function ProductList() {
  const { mutate } = useDeleteProduct();
  const [fixedTop, setFixedTop] = useState(false);

  const res = useGetProducts();
  if (res.isLoading) {
    return <Skeleton active />;
  }
  const columns = [
    {
      title: "ID",
      align: "center",
      dataIndex: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: " Name",
      align: "center",
      dataIndex: "title",
      render: (text) => <h1>{text}</h1>,
    },
    {
      title: "Image",
      align: "center",
      dataIndex: "img",
      render: (img) => <Image src={img} style={{ width: "100%" }} />,
    },
    {
      title: "Tags",
      align: "center",
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
      title: "Information",
      align: "center",
      children: [
        {
          title: "Process",
          dataIndex: "process",
          width: 100,
          align: "center",
          render: (process) => <h1>{process}</h1>,
        },
        {
          title: "Place",
          dataIndex: "place",
          width: 100,
          align: "center",
          render: (place) => <h1>{place}</h1>,
        },
        {
          title: "Flavor",
          dataIndex: "flavor",
          width: 100,
          align: "center",
          render: (flavor) => <h1>{flavor}</h1>,
        },
      ],
    },
    {
      title: "Price",
      align: "center",
      children: [
        {
          title: "250g",
          dataIndex: "price",
          width: 100,
          align: "center",
          sorter: (a, b) => a.price[0] - b.price[0],
          render: (array) => <h1>{array[0]}$</h1>,
        },
        {
          title: "500g",
          dataIndex: "price",
          width: 100,
          align: "center",
          sorter: (a, b) => a.price[1] - b.price[1],
          render: (array) => <h1>{array[1]}$</h1>,
        },
        {
          title: "1000g",
          dataIndex: "price",
          width: 100,
          align: "center",
          sorter: (a, b) => a.price[2] - b.price[2],
          render: (array) => <h1>{array[2]}$</h1>,
        },
      ],
    },

    {
      title: "Action",
      dataIndex: "_id",
      align: "center",
      key: "_id",
      render: (_id) => (
        <Space size="middle">
          <Link to={`/product/edit/${_id}`}>
            <Button
              icon={<EditTwoTone />}
              style={{ backgroundColor: "#c2bdec" }}
            >
              Edit
            </Button>
          </Link>
          <Button
            icon={<DeleteTwoTone />}
            style={{ backgroundColor: "#a8ffc8" }}
            onClick={() => handleDelete(_id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const handleDelete = async (_id) => {
    mutate(_id);
  };

  // rowSelection object indicates the need for row selection

  return (
    <div>
      <Affix>
        <center
          style={{
            fontWeight: 700,
            fontSize: "60px",
            backgroundColor: "blanchedalmond",
          }}
        >
          PRODUCT
        </center>
      </Affix>
      <Affix offsetTop={20}>
        <div style={{ padding: "10px" }}>
          <Link to="/newProduct" className="link">
            <Button
              size="larger"
              style={{
                backgroundColor: "rgb(86 233 36)",
                fontSize: "20px",
                width: "20%",
                height: "20%",
              }}
              icon={<PlusCircleTwoTone />}
            >
              CREATE PRODUCT
            </Button>
          </Link>
        </div>
      </Affix>
      <div style={{ flex: 1, padding: "5px" }}>
        <Table bordered columns={columns} dataSource={res.data} />
      </div>
    </div>
  );
}
