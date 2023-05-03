import {
  AppstoreOutlined,
  MailOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Badge, Input, Menu, Popover, Space } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

import Login from "../pages/Login";
import Register from "../pages/Register";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import CartContent from "./CartContent";
const { Search } = Input;
const Container = styled.div`
  height: 150px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center" })};
`;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 100px;
  font-family: "Youth Action", sans-serif;
  text-align: center;
  ${mobile({ fontSize: "24px", flex: 2 })}
`;
const MenuItem = styled.div`
  font-size: 30px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  margin-top: 60px;
  padding: 20px;
`;
const ContainerSearch = styled.div`
  ${mobile({ marginBottom: "30px", marginRight: 10 })}
`;

const Navbar = () => {
  const { products, total } = useSelector((state) => state.cart);
  const { isFetching, error, currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Container>
      <Wrapper>
        <Left>
          <ContainerSearch>
            <Search
              placeholder="search... "
              allowClear
              size="medium"
              enterButton
              style={{
                marginLeft: 100,
                marginTop: 20,
              }}
            />
          </ContainerSearch>
        </Left>
        <Center>
          <Logo>AROMA deLute.</Logo>
        </Center>
        <Right>
          {currentUser ? (
            <MenuItem>Log out</MenuItem>
          ) : (
            <Popover
              content={<Register />}
              title="Welcome to Coffee World"
              trigger="click"
              placement="bottomRight"
            >
              <MenuItem>REGISTER</MenuItem>
            </Popover>
          )}
          {currentUser ? (
            <MenuItem>{currentUser.email}</MenuItem>
          ) : (
            <Popover
              content={<Login />}
              title="Welcome to Coffee World"
              trigger="click"
            >
              <MenuItem>SIGN IN</MenuItem>
            </Popover>
          )}
          <MenuItem>
            <Popover
              placement="bottomRight"
              title="My cart"
              trigger="click"
              content={<CartContent products={products} total={total} />}
            >
              <Badge count={products.length}>
                <ShoppingCartOutlined style={{ fontSize: "30px" }} />
              </Badge>
            </Popover>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
