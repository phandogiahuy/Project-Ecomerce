import "./sidebar.css";

import { Link } from "react-router-dom";
import { Button } from "antd";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem ">Home</li>
            </Link>
            <li className="sidebarListItem">Analytics</li>
            <li className="sidebarListItem">Sales</li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/user" className="link">
              <li className="sidebarListItem">Users</li>
            </Link>
            <Link to="/product" className="link">
              <li className="sidebarListItem">Products</li>
            </Link>
            <Link to="/newProduct" className="link">
              <li>
                <Button
                  size="larger"
                  style={{ backgroundColor: "#67db6d", fontSize: "15px" }}
                >
                  CREATE PRODUCT
                </Button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
