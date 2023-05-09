import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Popover, Affix } from "antd";

import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { mobile } from "../responsive";

import CartContent from "./CartContent";
import { clearCart } from "../reduxToolkit/cartRedux";

import SearchInput from "./Search";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUsertById } from "../hooks/detail/useUserbyId";
const Container = styled.div`
  height: 130px;
  ${mobile({ height: "50px" })}
  background-color: aliceblue;
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
  font-size: 90px;
  font-family: "Youth Action", sans-serif;
  text-align: center;
  ${mobile({ fontSize: "20px", flex: 2 })}
  cursor: pointer;
`;
const LogoImage = styled.img`
  width: 10%;
`;
const MenuItem = styled.div`
  font-size: 25px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  margin-top: 60px;
  padding: 20px;
`;
const SearchComponent = styled.p`
  font-size: 25px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  margin-top: 20px;
  padding: 20px;
  margin-left: 20px;
`;

const Navbar = () => {
  const { products, total } = useSelector((state) => state.cart);
  const [currentUser, setCurrentUser] = useState("");
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const user = useUsertById(id);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = user;

        if (res.isLoading) {
          return <div>...loading</div>;
        }
        if (res.error) {
          return <div>{res.error.message}</div>;
        }
        if (res.isSuccess) {
          setCurrentUser(res.data.email);
        }
      } catch (err) {}
    };
    getUser();
  });
  const [top, setTop] = useState(10);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    dispatch(clearCart());
  };

  return (
    <Affix offsetTop={30}>
      <Container>
        <Wrapper>
          <Left>
            <Popover
              content={<SearchInput />}
              title="Search input"
              trigger="click"
              placement="bottomRight"
            >
              <SearchComponent>
                Search <SearchOutlined />
              </SearchComponent>
            </Popover>
          </Left>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Center>
              <Logo>
                {" "}
                <LogoImage src="vite.png" />
                AROMA deLute.
              </Logo>
            </Center>
          </Link>
          <Right>
            {token ? (
              <MenuItem onClick={handleLogOut}>Log out</MenuItem>
            ) : (
              <Popover
                content={<Register />}
                title="Welcome to Coffee World!"
                trigger="click"
                placement="bottomRight"
              >
                <MenuItem>REGISTER</MenuItem>
              </Popover>
            )}
            {token ? (
              <MenuItem>{currentUser} </MenuItem>
            ) : (
              <Popover
                content={<Login />}
                title="Welcome to Coffee World!"
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
    </Affix>
  );
};

export default Navbar;
