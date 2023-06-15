import { useState } from "react";
import {
  Form,
  Input,
  Button,
  Upload,
  Select,
  Space,
  InputNumber,
  message,
} from "antd";
import { storage } from "../../service-api/firebase";
import { PlusOutlined } from "@ant-design/icons";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useCreateProducts } from "../../hooks/Mutation/Product/useCreateProduct";
const options = [{ value: "phin" }, { value: "espresso" }, { value: "sale" }];

const NewProduct = () => {
  const [form] = Form.useForm();
  const [images, setImage] = useState(null);
  const [sale, setSale] = useState();
  const handleImageUpload = (info) => {
    setImage(info.file.originFileObj);
  };
  const { mutate } = useCreateProducts();
  const handleFinsh = async (values) => {
    const price = [];
    price.push(form.getFieldValue("price250"));
    price.push(form.getFieldValue("price500"));
    price.push(form.getFieldValue("price1000"));
    const imageRef = ref(storage, `images/${v4() + images.name}`);
    const snap = await uploadBytes(imageRef, images);
    const img = await getDownloadURL(snap.ref);
    const { title, categories, desc, sale } = values;
    const productData = {
      title,
      categories,
      desc,
      sale,
      price,
      img,
    };
    console.log(img);
    mutate(productData);
  };
  const handleValueSale = (e) => {
    if (e > 50) {
      message.error("Value of sale is bigger than 50%");
    }
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
          onChange={(e) => setSale(e)}
        />
      </Form.Item>
      {sale == "sale" && (
        <Form.Item
          name="sale"
          label="Sale"
          rules={[{ required: true, message: "Please enter a sale" }]}
        >
          <InputNumber
            type="number"
            placeholder="Enter sale"
            max={100}
            onChange={(e) => handleValueSale(e)}
          />
        </Form.Item>
      )}
      <Form.Item
        name="desc"
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
        ]}
      >
        <Input placeholder="Enter price for 250 gram" type="number" min={0} />
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
        ]}
      >
        <Input placeholder="Enter price for 500 gram" type="number" min={0} />
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
        ]}
      >
        <Input placeholder="Enter price for 1000 gram" type="number" min={0} />
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
