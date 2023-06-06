import { Comment, Avatar, Form, Button, List, Input } from "antd";
import { UserOutlined, SendOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const CommentComponent = () => {
  //   const CommentList = () => (
  //     <List
  //       dataSource={[]}
  //       itemLayout="horizontal"
  //       renderItem={() => (
  //         <Comment
  //           author={<span style={{ fontWeight: "bold" }}>John Doe</span>}
  //           avatar={<Avatar icon={<UserOutlined />} />}
  //           content={<p>This is a comment.</p>}
  //           datetime={<span>2 hours ago</span>}
  //         />
  //       )}
  //     />
  //   );
  return (
    <Form>
      <Form.Item>
        <TextArea rows={4} placeholder="Add a comment" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" icon={<SendOutlined />} htmlType="submit">
          Add Comment
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Comment;
