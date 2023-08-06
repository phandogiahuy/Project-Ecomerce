import {
  ExportOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Badge, Popover } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { useGetUser } from "../../hooks/Queries/User/useGetUser";
import Login from "../../pages/Login";
import Register from "../../pages/Register/Register";
import { clearCart } from "../../reduxToolkit/cartRedux";
import CartContent from "../Cart";
import SearchInput from "../Search";
import {
  Center,
  Container,
  InforUser,
  Left,
  Logo,
  LogoImage,
  MenuItem,
  Right,
  SearchComponent,
  Wrapper,
} from "./style-nav";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const user = useGetUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    dispatch(clearCart());
    window.location.reload(false);
    navigate("/");
  };
  const handleClickInforUser = () => {
    navigate(`/user/${user.data?._id}`);
  };
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
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div className=" mt-[-45px] flex items-end ">
              <LogoImage src="/CatPoster.png" />
              <Logo> AROMA deLute.</Logo>
            </div>
          </Link>
        </Center>
        <Right>
          {user.data ? (
            <>
              <MenuItem onClick={handleLogOut}>
                {" "}
                <ExportOutlined />
                Log out
              </MenuItem>
              <InforUser onClick={handleClickInforUser}>
                My Information
              </InforUser>
            </>
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
          {user.data ? (
            <MenuItem>{user.data.username}</MenuItem>
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
  );
};

export default Navbar;
