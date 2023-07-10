import { Button, Form, Input } from "antd";
import React from "react";

import { useChangeInforUser } from "../../../hooks/Mutation/useChangeInforUser";
import { useGetUser } from "../../../hooks/Queries/User/useGetUser";

const InfoUser = () => {
  const [form] = Form.useForm();
  const user = useGetUser();
  const { mutate } = useChangeInforUser();

  const onFinishRegister = (values) => {
    mutate({
      username: values.username,
      email: values.email,
      password: values.password,
      id: user.data?._id,
    });
    // console.log({
    //   username: values.username,
    //   email: values.email,
    //   password: values.password,
    //   id: user.data?._id,
    // });
  };
  return (
    <div className="p-8">
      <Form
        form={form}
        name="register"
        onFinish={onFinishRegister}
        labelCol={{ flex: "110px" }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
        style={{ maxWidth: 600 }}
        scrollToFirstError
        initialValues={{
          username: user.data?.username,
          email: user.data?.email,
          password: user.data?.password,
          confirm: user.data?.password,
        }}
      >
        <Form.Item
          name="username"
          label="Nickname"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your nickname!",
              whitespace: true,
            },
          ]}
        >
          <Input
            style={{
              maxWidth: "70%",
            }}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            // { validator: validateEmail },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input
            style={{
              maxWidth: "70%",
            }}
            type="email"
          />
        </Form.Item>
        <Form.Item name="password" label="New Pass" hasFeedback>
          <Input.Password
            style={{
              width: "100%",
              maxWidth: "70%",
            }}
            type="password"
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Pass"
          dependencies={["password"]}
          hasFeedback
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            style={{
              width: "100%",
              maxWidth: "70%",
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Change
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default InfoUser;
