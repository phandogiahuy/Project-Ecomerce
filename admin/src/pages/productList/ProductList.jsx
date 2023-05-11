import { Table, Tag, Space, Button, Image, Skeleton } from "antd";
import { useProducts } from "../../hooks/useProducts";
import { useDeleteProduct } from "../../hooks/detail/useDeleteProductById";
import { Link } from "react-router-dom";

export default function ProductList() {
  const { mutate } = useDeleteProduct();

  const res = useProducts();
  if (res.isLoading) {
    return <Skeleton active />;
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
      render: (text) => <h2>{text}</h2>,
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
      sorter: (a, b) => a.price - b.price,
      render: (array) => <h2>{array[0]}$</h2>,
    },

    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      render: (_id) => (
        <Space size="middle">
          <Link to={`/product/edit/${_id}`}>
            <Button style={{ backgroundColor: "#c2bdec" }}>Edit</Button>
          </Link>
          <Button
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
          >
            CREATE PRODUCT
          </Button>
        </Link>
      </div>
      <div style={{ flex: 1, padding: "5px" }}>
        <Table bordered columns={columns} dataSource={res.data} />
      </div>
    </div>
  );
}
