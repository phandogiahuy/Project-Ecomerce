import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Popover, Affix } from "antd";

import styled from "styled-components";
import { Link } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import CartContent from "./CartContent";
import { logout } from "../reduxToolkit/userSlice";
import { clearCart } from "../reduxToolkit/cartRedux";

import SearchInput from "./Search";
import { useState } from "react";

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
  font-size: 90px;
  font-family: "Youth Action", sans-serif;
  text-align: center;
  ${mobile({ fontSize: "24px", flex: 2 })}
  cursor: pointer;
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
  margin-top: 60px;
  padding: 20px;
  margin-left: 40px;
`;

const Navbar = () => {
  const { products, total } = useSelector((state) => state.cart);
  const { isFetching, error, currentUser } = useSelector((state) => state.user);
  const [top, setTop] = useState(10);
  // const [searchQuery, setSearchQuery] = useState("");
  // const [type, setType] = useState(false);
  // const dispatch = useDispatch();

  // // const [debouncedQuery] = useDebounce(searchQuery, 500);
  // const debouncedSetQuery = debounce((value) => {
  //   setSearchQuery(value);
  // }, 5);
  // const { data, isLoading, isError } = useSearch(searchQuery);

  const handleLogOut = () => {
    dispatch(logout());
    dispatch(clearCart());
  };
  // const handleSearch = (e) => {
  //   debouncedSetQuery(e.target.value);
  //   setType(true);
  //   if (!e.target.value) {
  //     setType(false);
  //   }
  // };
  return (
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
            <Logo>AROMA deLute.</Logo>
          </Center>
        </Link>
        <Right>
          {currentUser ? (
            <MenuItem onClick={handleLogOut}>Log out</MenuItem>
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
            <MenuItem> {currentUser.email}</MenuItem>
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
