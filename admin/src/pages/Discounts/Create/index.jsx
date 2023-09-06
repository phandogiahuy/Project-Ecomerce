import { Form, Input, Button, Upload, Select, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { useCreateDiscount } from "../../../hooks/Mutation/Discount/useCreateDiscount";

const NewDiscount = () => {
  const [form] = Form.useForm();

  const { mutate } = useCreateDiscount();
  const handleFinsh = async (values) => {
    mutate({ ...values });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinsh}
      style={{ width: "50%", padding: "30px" }}
    >
      <Form.Item
        name="code"
        label="Code"
        rules={[{ required: true, message: "Please enter code" }]}
      >
        <Input placeholder="Enter code" />
      </Form.Item>

      <Form.Item
        name="sale"
        label="Discount"
        rules={[{ required: true, message: "Please input discount value" }]}
      >
        <Input placeholder="Enter discount value" />
      </Form.Item>

      <Form.Item
        name="limit"
        label=" Discount Limit"
        rules={[{ required: true, message: "Please enter a discount limit" }]}
      >
        <Input placeholder="Enter a discount limit" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          <PlusOutlined /> Update Discount
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewDiscount;
