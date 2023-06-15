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
import { EditFilled, PlusOutlined } from "@ant-design/icons";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useParams } from "react-router-dom";
import { useEditProductById } from "../../hooks/Mutation/Product/useEditProductById";
import { useGetProductById } from "../../hooks/Queries/Product/useGetProductById";
import { useQueryClient } from "react-query";
import { GET_PRODUCT_ID } from "../../constant/queryKey";

const options = [{ value: "phin" }, { value: "espresso" }, { value: "sale" }];

const EditProduct = () => {
  let { _id } = useParams();
  const [form] = Form.useForm();

  const { mutate } = useEditProductById(_id);
  const [change, setChange] = useState(false);
  const queryClient = useQueryClient();
  const [images, setImage] = useState();
  const handleImageUpload = (info) => {
    setChange(true);
    setImage(info.file.originFileObj);
  };
  const res = useGetProductById(_id);

  if (res.isLoading) {
    return <div>...loading</div>;
  }
  const handleFinsh = async (values) => {
    const price = [];
    price.push(form.getFieldValue("price250"));
    price.push(form.getFieldValue("price500"));
    price.push(form.getFieldValue("price1000"));

    if (change) {
      const imageRef = ref(storage, `images/${v4() + images.name}`);
      const snap = await uploadBytes(imageRef, images);
      const img = await getDownloadURL(snap.ref);
      const { title, categories, sale, desc, process, flavor, place } = values;
      const productData = {
        title,
        categories,
        desc,
        sale,
        process,
        flavor,
        place,
        price,
        img,
      };
      mutate({ productData, id: _id });
    } else {
      const { title, categories, desc, sale, process, flavor, place, img } =
        values;
      const productData = {
        title,
        categories,
        desc,
        process,
        sale,
        flavor,
        place,
        img,
        price,
      };
      mutate({ productData, id: _id });
    }
  };
  const handleValueSale = (e) => {
    if (e > 50) {
      message.error("Value of sale is bigger than 50%");
    }
  };
  const handleSale = (values) => {
    queryClient.setQueryData([GET_PRODUCT_ID, { id: _id }], (old) => {
      return { ...old, categories: values };
    });
  };
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinsh}
      style={{ width: "50%", padding: "30px" }}
      initialValues={{
        title: res.data.title,
        categories: res.data.categories,
        desc: res.data.desc,
        sale: res.data.sale,
        price250: res.data.price[0],
        price500: res.data.price[1],
        price1000: res.data.price[2],
        process: res.data.process,
        place: res.data.place,
        flavor: res.data.flavor,
      }}
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
          onChange={handleSale}
        />
      </Form.Item>
      {res.data.categories.includes("sale") && (
        <Form.Item
          name="sale"
          label="Sale"
          rules={[{ required: true, message: "Please enter a sale" }]}
        >
          <InputNumber
            type="number"
            placeholder="Enter sale"
            max={100}
            onChange={handleValueSale}
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
        <Input placeholder="Enter price for 250 gram" type="number" min={0} />
      </Form.Item>
      <Form.Item
        name="process"
        label="Process"
        rules={[
          { required: true, message: "Please enter a process of coffee" },
        ]}
      >
        <Input placeholder="Please enter a process of coffee" type="string" />
      </Form.Item>
      <Form.Item
        name="place"
        label="Place"
        rules={[{ required: true, message: "Please enter a place of coffee" }]}
      >
        <Input placeholder="Enter a place of coffee" type="string" />
      </Form.Item>
      <Form.Item
        name="flavor"
        label="Flavor"
        rules={[{ required: true, message: "Please enter a flavor" }]}
      >
        <Input placeholder="Please enter a flavor" type="string" />
      </Form.Item>
      <Form.Item label="Upload" name="img">
        <Upload
          listType="picture-card"
          onChange={handleImageUpload}
          customRequest={({ onSuccess, file }) => {
            onSuccess(null, file);
          }}
          defaultFileList={[{ url: res.data.img }]}
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
          <EditFilled /> Upload product
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditProduct;
