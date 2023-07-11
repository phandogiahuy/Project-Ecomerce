import { Button, Card, Divider, Form, Input, Radio, Space } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useMoMo } from "../../hooks/Mutation/Momo/useMomo";
import { useSetOrder } from "../../hooks/Mutation/Order/useSetOrder";
import { useGetUser } from "../../hooks/Queries/User/useGetUser";
import { showOrder } from "../../reduxToolkit/orderRedux";
import ProductDetailCheckOut from "../ProductDetail";
import MySteps from "../Steps";
import { InforProduct, InforUser } from "./style";

const CheckoutComponent = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [payment, setPayment] = useState();
  const { products, pricetotal, shipping } = useSelector((state) => state.cart);
  const { mutate } = useSetOrder();
  const user = useGetUser();
  console.log(user.data?._id);
  const momo = useMoMo();
  const handleFinsh = async (values) => {
    const { name, phone, mail, address } = values;
    if (payment === "COD") {
      dispatch(
        showOrder({
          name,
          phone,
          mail,
          address,
          products,
          total: pricetotal,
          payment,
        })
      );
      const id = user.data?._id || 0;
      mutate({
        name,
        phone,
        mail,
        address,
        products,
        shipping,
        total: pricetotal,
        payment,
        userId: id,
      });
    } else {
      dispatch(
        showOrder({
          name,
          phone,
          mail,
          address,
          products,
          total: pricetotal,
          payment,
        })
      );
      momo.mutate({
        name,
        phone,
        mail,
        address,
        products,
        shipping,
        total: pricetotal,
        payment,
      });
    }
  };

  return (
    <div className=" p-5">
      <h1 className="p-6">Checkout Product</h1>
      <MySteps step={1} />{" "}
      <div className=" flex w-[100%]  p-5">
        <InforUser>
          <h2>Order Information</h2>
          <Form
            layout="vertical"
            form={form}
            onFinish={handleFinsh}
            initialValues={{
              name: user.data?.username,
              mail: user.data?.email,
            }}
          >
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
              <ProductDetailCheckOut product={product} key={product._id} />
            ))}
          </Card>
          <Divider />
          <div>
            <h4 className="ml-10 font-bold"> Shipping: {shipping}$</h4>
            <center className="text-2xl font-bold">
              {" "}
              Total: {pricetotal}${" "}
            </center>
          </div>
        </InforProduct>
      </div>
    </div>
  );
};

export default CheckoutComponent;
