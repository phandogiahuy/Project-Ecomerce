import { Table, Tag, Space, Button, Skeleton, Affix } from "antd";
import { useDiscount } from "../../hooks/useDiscount";
import { useDeleteDiscount } from "../../hooks/detail/useDiscounById";
import { Link } from "react-router-dom";
import {
  DeleteTwoTone,
  EditTwoTone,
  PlusCircleTwoTone,
} from "@ant-design/icons";

export default function DiscountList() {
  const { mutate } = useDeleteDiscount();

  const res = useDiscount();
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
      title: "Code",
      dataIndex: "code",
      render: (text) => <h1>{text}</h1>,
    },
    {
      title: "Discount",
      dataIndex: "sale",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.sale - b.sale,
      render: (text) => <h1>{text}%</h1>,
    },
    {
      title: "Limit",
      dataIndex: "limit",
      render: (text) => <h1>{text}$</h1>,
    },
    {
      title: "createdAt",
      dataIndex: "createdAt",
      render: (text) => <h1>{text.slice(0, 10)}</h1>,
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      render: (_id) => (
        <Space size="middle">
          <Link to={`/discount/edit/` + _id}>
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
          DISCOUNT
        </center>
      </Affix>
      <Affix offsetTop={20}>
        <div style={{ padding: "10px" }}>
          <Link to="/newDiscount" className="link">
            <Button
              size="larger"
              style={{
                backgroundColor: "rgb(86 233 36)",
                fontSize: "20px",
                width: "15%",
                height: "20%",
              }}
              icon={<PlusCircleTwoTone />}
            >
              CREATE DISCOUNT
            </Button>
          </Link>
        </div>
      </Affix>
      <div style={{ flex: 1 }}>
        <Table bordered columns={columns} dataSource={res.data} />
      </div>
    </div>
  );
}
