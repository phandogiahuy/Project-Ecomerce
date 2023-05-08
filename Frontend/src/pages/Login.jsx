import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import styled from "styled-components";
// import { login } from "../reduxToolkit/callAPI";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate, useNavigation } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;
const Error = styled.div``;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fail, setFail] = useState(0);
  const { mutate, isLoading } = useLogin();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    mutate({ password, email });
  };

  return (
    <Container>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={handleClick}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Log in"}
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};
export default Login;
// import { useQueryClient } from 'react-query';
// import Login from './Login';

// function App() {
//   const queryClient = useQueryClient();
//   const user = queryClient.getQueryData('user');

//   const handleLogout = () => {
//     queryClient.setQueryData('user', null);
//   };

//   return (
//     <div>
//       {user ? (
//         <div>
//           <p>Welcome, {user.username}!</p>
//           <button onClick={handleLogout}>Log out</button>
//         </div>
//       ) : (
//         <Login />
//       )}
//     </div>
//   );
// }
// <Form.Item>
//   <Form.Item name="remember" valuePropName="checked" noStyle>
//     <Checkbox>Remember me</Checkbox>
//   </Form.Item>

//   <a className="login-form-forgot" href="">
//     Forgot password
//   </a>
// </Form.Item>

// {error && fail > 0 && <Error>Your password or email is wrong</Error>}
