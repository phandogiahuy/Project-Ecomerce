import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

// import { login } from "../reduxToolkit/callAPI";
import { useLoginPageProduct } from "../../../hooks/Mutation/useSetLogin";

const LoginProduct = () => {
  const { mutate: login, isLoading } = useLoginPageProduct();
  const onFinishLogIn = async (values) => {
    const { email, password } = values;
    login({ email, password });
  };
  const renderForm = ({ component, ...itemProps }, i) => {
    return (
      <Form.Item {...itemProps} key={i}>
        {component}
      </Form.Item>
    );
  };
  const arrayForm = [
    {
      name: "email",
      rules: [
        {
          required: true,
          message: "Please input your email!",
        },
      ],
      component: (
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
          type="email"
        />
      ),
    },
    {
      name: "password",
      rules: [
        {
          required: true,
          message: "Please input your Password!",
        },
      ],
      component: (
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      ),
    },
    {
      component: (
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button w-[100%]"
        >
          {isLoading ? "Logging in..." : "Log in"}
        </Button>
      ),
    },
  ];
  return (
    <div>
      <div className="relative">
        <div className="absolute  left-24 top-64 flex ">
          <img src="/vite.png" className="w-[10%]" />
          <h1 className="text-[70px]">Aroma Delute</h1>
        </div>
        <div className="absolute right-80 top-40  rounded-md	 bg-teal-200 p-24 shadow-slate-50	">
          <Form
            name="normal_login"
            className="login-form"
            onFinish={onFinishLogIn}
          >
            {arrayForm.map(renderForm)}
          </Form>
        </div>
      </div>
    </div>
  );
};
export default LoginProduct;
