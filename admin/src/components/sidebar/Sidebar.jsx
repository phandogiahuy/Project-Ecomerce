import "./sidebar.css";

import { Link } from "react-router-dom";
import { Button } from "antd";
import {
  BankTwoTone,
  DollarCircleTwoTone,
  FundTwoTone,
  ShopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem ">
                {" "}
                <BankTwoTone />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              {" "}
              <FundTwoTone />
              Analytics
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/user" className="link">
              <li className="sidebarListItem">
                {" "}
                <TeamOutlined />
                Users
              </li>
            </Link>
            <Link to="/product" className="link">
              <li className="sidebarListItem">
                {" "}
                <ShopOutlined /> Products
              </li>
            </Link>
            <Link to="/discount" className="link">
              <li className="sidebarListItem">
                {" "}
                <DollarCircleTwoTone />
                Discounts
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
