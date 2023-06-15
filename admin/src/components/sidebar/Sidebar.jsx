import "./sidebar.css";

import { Link } from "react-router-dom";
import { Button } from "antd";
import {
  BankTwoTone,
  DollarCircleTwoTone,
  FundTwoTone,
  ShoppingTwoTone,
  CrownTwoTone,
  SkinTwoTone,
  InfoCircleTwoTone,
} from "@ant-design/icons";
import { useState } from "react";
export default function Sidebar() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogOut = () => {
    setToken(localStorage.removeItem("token"));
    window.location.reload(false);
  };
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
            {!token ? (
              <Link to="/login" className="link">
                <li className="sidebarListItem"> Sign in</li>
              </Link>
            ) : (
              <div>
                <li className="sidebarListItem"> ADMIN</li>
                <Link to="/user" className="link">
                  <li className="sidebarListItem">
                    <CrownTwoTone />
                    Users
                  </li>
                </Link>
                <Link to="/product" className="link">
                  <li className="sidebarListItem">
                    <ShoppingTwoTone /> Products
                  </li>
                </Link>
                <Link to="/discount" className="link">
                  <li className="sidebarListItem">
                    {" "}
                    <DollarCircleTwoTone />
                    Discounts
                  </li>
                </Link>
                <Button
                  className="sidebarListItem"
                  onClick={(e) => handleLogOut()}
                >
                  <InfoCircleTwoTone /> Sign out
                </Button>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
