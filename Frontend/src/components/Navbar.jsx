import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Input, Popover, Space } from "antd";
import React from "react";
import styled from "styled-components";

import Login from "../pages/Login";
import Register from "../pages/Register";
import { mobile } from "../responsive";

const { Search } = Input;
const Container = styled.div`
  height: 60px;
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
  justify-content: space-around;
  ${mobile({ justifyContent: "center" })}
`;
const Logo = styled.h1`
  font-weight: bold;
  font-size: larger;
  text-align: center;
  ${mobile({ fontSize: "24px", flex: 2 })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const ContainerSearch = styled.div`
  ${mobile({ marginBottom: "30px", marginRight: 10 })}
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>English</Language>
          <ContainerSearch>
            <Search
              placeholder="input search text"
              allowClear
              size="medium"
              enterButton
              style={{
                marginLeft: 10,
                backgroundColor: "coral",
              }}
            />
          </ContainerSearch>
        </Left>
        <Center>
          <Logo>AROMA deLute.</Logo>
        </Center>
        <Right>
          <Popover
            content={<Register />}
            title="Welcome to Coffee World"
            trigger="click"
            s
          >
            <MenuItem>REGISTER</MenuItem>
          </Popover>
          <Popover
            content={<Login />}
            title="Welcome to Coffee World"
            trigger="click"
          >
            <MenuItem>SIGN IN</MenuItem>
          </Popover>
          <MenuItem>
            <Badge count={5}>
              <ShoppingCartOutlined style={{ fontSize: "30px" }} />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
