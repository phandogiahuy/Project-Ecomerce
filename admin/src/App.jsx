import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";

import { Layout, Space } from "antd";
const { Header, Sider, Content } = Layout;

const App = () => (
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
        <Sider style={{ backgroundColor: "white" }}>
          <Sidebar />
        </Sider>
        <Content>
          <Outlet />{" "}
        </Content>
      </Layout>
    </Layout>
  </Space>
);
export default App;
