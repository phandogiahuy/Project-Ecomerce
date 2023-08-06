import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";

import { Layout, Space } from "antd";
import { Topbar } from "./components/topbar/Topbar";
const { Header, Sider, Content } = Layout;

const App = () => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <Header style={{ backgroundColor: "lavender" }}>
          <Topbar />
        </Header>
        <Layout>
          <Sider
            style={{
              backgroundColor: "white",
              marginTop: "20px",
              marginLeft: "20px",
            }}
          >
            <Sidebar />
          </Sider>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Space>
  );
};
export default App;
