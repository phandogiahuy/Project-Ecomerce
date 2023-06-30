import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, Rate } from "antd";
import React, { useState } from "react";

import { useCreateReview } from "../../hooks/Mutation/useCreateReview";

const ReviewModal = ({ id, name, handleCancel }) => {
  // const user = useGetUser();
  // if (user.isLoading) {
  //   return <Skeleton />;
  // }

  const userId = localStorage.getItem("id");
  const username = localStorage.getItem("name");
  const [form] = Form.useForm();
  const [rating, setRate] = useState(0);
  const { mutate } = useCreateReview(handleCancel);

  const handleFinsh = async (values) => {
    const { content } = values;
    mutate({ content, rating, id, userId, username });

    // window.location.reload(false);
  };

  return (
    <div>
      <div>
        <p className="text-base font-medium">You are reviewing </p>
        <h2 className="font-semibold">{name}</h2>
        <Divider>Your Rate</Divider>
        <h3>
          Quality <Rate allowHalf onChange={(value) => setRate(value)} />
        </h3>
        <Divider />
        <h3>Content</h3>
        <div>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleFinsh}
            style={{ width: "100%" }}
          >
            <Form.Item
              name="content"
              rules={[{ required: true, message: "Please enter a content" }]}
            >
              <Input.TextArea
                placeholder="Enter description"
                style={{ width: "100%", height: "200px" }}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                <PlusOutlined /> Create Review
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
