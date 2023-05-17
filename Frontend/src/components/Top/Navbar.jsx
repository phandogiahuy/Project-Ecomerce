import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Popover, Affix } from "antd";

import { Link, useNavigate } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

import CartContent from "../Cart/CartContent";
import { clearCart } from "../../reduxToolkit/cartRedux";

import SearchInput from "./Search";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUsertById } from "../../hooks/detail/useUserbyId";
import { useUser } from "../../hooks/useUser";
import {
  Center,
  Container,
  Left,
  Logo,
  LogoImage,
  MenuItem,
  Right,
  SearchComponent,
  Wrapper,
} from "./Style-Nav";

const Navbar = () => {
  const { products, total } = useSelector((state) => state.cart);
  const token = localStorage.getItem("token");
  const [uses, setUser] = useState("");
  const user = useUser();
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
          setUser(res.data.email);
        }
      } catch (err) {}
    };
    getUser();
  }, [token]);
  const [top, setTop] = useState(10);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.removeItem("token");
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
                <LogoImage src="/vite.png" />
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
              <MenuItem>{uses}</MenuItem>
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