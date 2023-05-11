import { Form, Input, Button, Upload, Select } from "antd";

import { EditFilled, PlusOutlined } from "@ant-design/icons";

import { useParams } from "react-router-dom";
import {
  useDiscountById,
  useEditDiscountById,
} from "../../hooks/detail/useDiscounById";

const EditDiscount = () => {
  let { _id } = useParams();
  const [form] = Form.useForm();
  const { mutate } = useEditDiscountById();

  const res = useDiscountById(_id);

  if (res.isLoading) {
    return <div>...loading</div>;
  }
  const handleFinsh = async (values) => {
    mutate({ ...values, id: _id });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinsh}
      style={{ width: "50%", padding: "30px" }}
      initialValues={{
        code: res.data.code,
        sale: res.data.sale,
        limit: res.data.limit,
      }}
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
          <EditFilled /> Update Discount
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditDiscount;
