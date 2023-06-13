import { Form, Input, Button, Space, List, Card, Divider, Radio } from "antd";
import React, { useState } from "react";
import { InforProduct, InforUser } from "./style";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailCheckOut from "../ProductDetail";
import MySteps from "../Steps";
import { useGetUser } from "../../hooks/Queries/User/useGetUser";
import { Link } from "react-router-dom";
import { useSetOrder } from "../../hooks/Mutation/Order/useSetOrder";
import { showOrder } from "../../reduxToolkit/orderRedux";

const CheckoutComponent = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const [payment, setPayment] = useState();
  const { products } = useSelector((state) => state.cart);
  const { mutate } = useSetOrder();

  const calculateTotal = () => {
    return products.reduce((pre, cur) => {
      return pre + cur.price * cur.quanity;
    }, 0);
  };
  console.log(products);
  const handleFinsh = async (values) => {
    const { name, phone, mail, address } = values;
    dispatch(
      showOrder({
        name,
        phone,
        mail,
        address,
        products,
        total: calculateTotal(),
        payment,
      })
    );
    mutate({
      name,
      phone,
      mail,
      address,
      products,
      total: calculateTotal(),
      payment,
    });
  };
  return (
    <div className=" p-5">
      <h1 className="p-6">Checkout Product</h1>
      <MySteps step={1} />{" "}
      <div className=" flex w-[100%]  p-5">
        <InforUser>
          <h2>Order Information</h2>
          <Form layout="vertical" form={form} onFinish={handleFinsh}>
            <Space>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Name" type="string" />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true, message: "Please enter your phone" }]}
              >
                <Input placeholder="Phone" type="string" />
              </Form.Item>
            </Space>
            <Form.Item
              label="Email"
              name="mail"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input placeholder="Email" type="email" />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please enter your address to delivery",
                },
              ]}
            >
              <Input placeholder="Adress" type="string" />
            </Form.Item>

            <Form.Item className="flex justify-center ">
              <Button type="primary" htmlType="submit" className="text-lg">
                Checkout
              </Button>
            </Form.Item>
          </Form>
          <div>
            <h2>PAYMENTS</h2>
            <Radio.Group>
              <Space direction="vertical">
                <Radio
                  value={"COD"}
                  onChange={(e) => setPayment(e.target.value)}
                >
                  <h2>COD</h2>
                </Radio>
                <Radio
                  value={"Banking"}
                  onChange={(e) => setPayment(e.target.value)}
                >
                  <h2>BANKING (Momo)</h2>
                </Radio>
              </Space>
            </Radio.Group>
          </div>
        </InforUser>
        <InforProduct>
          <Card
            hoverable
            style={{}}
            title="Product Information"
            className="h-[60vh] overflow-scroll overflow-x-hidden "
          >
            {products.map((product) => (
              <ProductDetailCheckOut product={product} />
            ))}
          </Card>
          <Divider />
          <div>
            <h1 className="ml-10 font-bold"> Total: {calculateTotal()}$ </h1>
          </div>
        </InforProduct>
      </div>
    </div>
  );
};

export default CheckoutComponent;
