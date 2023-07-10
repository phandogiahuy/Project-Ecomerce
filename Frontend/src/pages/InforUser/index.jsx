import { AccountBookOutlined } from "@ant-design/icons";
import React, { useRef, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

import Navbar from "../../components/NavBar";
import { useGetUser } from "../../hooks/Queries/User/useGetUser";
import { Button, Detail, History, Infor, Nav, Order, Wrapper } from "./style";

const InforUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const click1 = useRef(null);
  const click2 = useRef(null);
  const click3 = useRef(null);
  const user = useGetUser();
  const [isOpen, setIsOpen] = useState(false);
  const clickOrder = () => {
    navigate(`order`);
    click1.current.style.opacity = "1";
    click2.current.style.opacity = "0.4";
    click3.current.style.opacity = "1";
    setIsOpen(true);
  };
  const clickHistory = () => {
    navigate(`history`);
    click1.current.style.opacity = "1";
    click2.current.style.opacity = "1";
    click3.current.style.opacity = "0.4";
    setIsOpen(true);
  };
  const clickInfor = () => {
    navigate(`info`);
    click1.current.style.opacity = "0.4";
    click2.current.style.opacity = "1";
    click3.current.style.opacity = "1";
    setIsOpen(true);
  };
  return (
    <>
      <Navbar />
      <h2 className="p-5 text-6xl">My Information</h2>
      <div className="flex p-6">
        <Nav>
          <Wrapper>
            <Infor>
              <Button onClick={clickInfor} ref={click1}>
                My Information
              </Button>
            </Infor>
            <Order>
              <Button onClick={clickOrder} ref={click2}>
                My Order
              </Button>
            </Order>
            <History>
              <Button onClick={clickHistory} ref={click3}>
                Order History
              </Button>
            </History>
          </Wrapper>
        </Nav>
        <Detail>
          {isOpen ? (
            <Outlet />
          ) : (
            <div className="flex flex-col items-center  p-6">
              <h1>Hello {user.data?.username}, welcome to The Coffee World</h1>
              <AccountBookOutlined style={{ fontSize: "50px" }} />
            </div>
          )}
        </Detail>
      </div>
    </>
  );
};

export default InforUser;
