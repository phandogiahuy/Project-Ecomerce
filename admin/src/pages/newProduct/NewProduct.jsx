import { useState } from "react";
import { Form, Input, Button, Upload, Select, Space } from "antd";
import { storage } from "../../firebase";
import { PlusOutlined } from "@ant-design/icons";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useGetProducts } from "../../hooks/useProducts";
const options = [{ value: "phin" }, { value: "espresso" }, { value: "sale" }];

const NewProduct = () => {
  const [form] = Form.useForm();
  const [images, setImage] = useState(null);

  const handleImageUpload = (info) => {
    console.log(info);
    setImage(info.file.originFileObj);
  };
  const { mutate } = useGetProducts();
  const handleFinsh = async (values) => {
    const price = [];
    price.push(form.getFieldValue("price250"));
    price.push(form.getFieldValue("price500"));
    price.push(form.getFieldValue("price1000"));
    const imageRef = ref(storage, `images/${v4() + images.name}`);
    const snap = await uploadBytes(imageRef, images);
    const img = await getDownloadURL(snap.ref);
    const { title, categories, description } = values;
    const productData = {
      title,
      categories,
      description,
      price,
      img,
    };
    console.log(img);
    mutate(productData);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinsh}
      style={{ width: "50%", padding: "30px" }}
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: "Please enter a title" }]}
      >
        <Input placeholder="Enter title" />
      </Form.Item>

      <Form.Item
        name="categories"
        label="Category"
        rules={[{ required: true, message: "Please select categories" }]}
      >
        <Select
          mode="multiple"
          showArrow
          style={{ width: "100%" }}
          options={options}
        />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: "Please enter a description" }]}
      >
        <Input.TextArea placeholder="Enter description" />
      </Form.Item>
      <Form.Item
        name="price250"
        label="Price for 250 gram"
        rules={[
          { required: true, message: "Please enter a price" },
          {
            min: 0,
            message: "Price must be a positive number",
          },
          { type: "string" },
        ]}
      >
        <Input placeholder="Enter price for 250 gram" />
      </Form.Item>
      <Form.Item
        name="price500"
        label="Price for 500 gram"
        rules={[
          { required: true, message: "Please enter a price" },
          {
            min: 0,
            message: "Price must be a positive number",
          },
          { type: "string" },
        ]}
      >
        <Input placeholder="Enter price for 250 gram" />
      </Form.Item>
      <Form.Item
        name="price1000"
        label="Price for 1000 gram"
        rules={[
          { required: true, message: "Please enter a price" },
          {
            min: 0,
            message: "Price must be a positive number",
          },
          { type: "string" },
        ]}
      >
        <Input placeholder="Enter price for 250 gram" />
      </Form.Item>
      <Form.Item label="Upload">
        <Upload
          listType="picture-card"
          onChange={handleImageUpload}
          customRequest={({ onSuccess, file }) => {
            onSuccess(null, file);
          }}
        >
          <div>
            <PlusOutlined />
            <div
              style={{
                marginTop: 8,
              }}
            >
              Upload
            </div>
          </div>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          <PlusOutlined /> Create product
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewProduct;
// <Form.Item
// name="categories"
// label="Category"
// rules={[{ required: true, message: "Please enter categories" }]}
// >
// <Input placeholder="Enter category" type="array" />
// </Form.Item>
