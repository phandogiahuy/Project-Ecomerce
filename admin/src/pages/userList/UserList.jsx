import { Table, Tag, Space, Button, Skeleton, Affix } from "antd";
import { useUser } from "../../hooks/useUser";
import { useDeleteUser } from "../../hooks/detail/useUserbyId";
import { DeleteTwoTone } from "@ant-design/icons";

export default function UserList() {
  const { mutate } = useDeleteUser();

  const res = useUser();
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
      title: "Name",
      align: "center",
      dataIndex: "username",
      render: (text) => <h1>{text}</h1>,
    },
    {
      title: "Email",
      align: "center",
      dataIndex: "email",
      render: (text) => <h1>{text}</h1>,
    },
    {
      title: "Type",
      align: "center",
      dataIndex: "isAdmin",
      render: (isAdmin) => (
        <div>
          {isAdmin ? (
            <Tag color={"green"}>Admin </Tag>
          ) : (
            <Tag color={"blue"}>User </Tag>
          )}
        </div>
      ),
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
    <div style={{ flex: 1 }}>
      <Affix>
        <center
          style={{
            fontWeight: 700,
            fontSize: "60px",
            backgroundColor: "blanchedalmond",
          }}
        >
          USER
        </center>
      </Affix>
      <Table bordered columns={columns} dataSource={res.data} sticky />
    </div>
  );
}
