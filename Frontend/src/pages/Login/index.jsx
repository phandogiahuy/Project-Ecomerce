import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

// import { login } from "../reduxToolkit/callAPI";
import { useLogin } from "../../hooks/Mutation/useSetLogin";
import { Container } from "./style-login";

const Login = () => {
  const { mutate, isLoading } = useLogin();

  const onFinishLogIn = async (values) => {
    const { email, password } = values;
    mutate({ email, password });
  };

  return (
    <Container>
      <Form name="normal_login" className="login-form" onFinish={onFinishLogIn}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            type="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            {isLoading ? "Logging in..." : "Log in"}
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};
export default Login;
