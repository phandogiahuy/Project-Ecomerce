import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Divider, Space } from "antd";
import Item from "antd/es/list/Item";
import React from "react";
import { useDispatch } from "react-redux";
import { clearCart, removeProduct } from "../../reduxToolkit/cartRedux";
import { Link } from "react-router-dom";
import {
  Bottom,
  Clear,
  Container,
  Content,
  Img,
  Name,
  Price,
  Product,
  Products,
  Quanity,
  Title,
  Top,
  Total,
  Type,
} from "./Style-CartContent";

const CartContent = ({ products }) => {
  const dispatch = useDispatch();
  if (products.length === 0) {
    return <div>No item in your cart</div>;
  }
  const x = [];
  products.map((i) => {
    x.push(i.price * i.quanity);
  });
  let priceTotal = 0;
  x.map((i) => {
    priceTotal += i;
  });
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <Container>
      <Top>
        <Products>
          {products.map((i) => (
            <Product key={i.product._id}>
              <Img src={i.product.img} />
              <Content>
                <Name>{i.product.title}</Name>
                <DeleteOutlined
                  onClick={() =>
                    dispatch(
                      removeProduct({
                        id: i.product._id,
                        totalItem: i.price * i.quanity,
                        type: i.type,
                        size: i.size,
                      })
                    )
                  }
                  style={{
                    marginLeft: 20,
                    marginTop: 10,
                    fontSize: 20,
                    cursor: "pointer",
                    position: "absolute",
                    left: 220,
                  }}
                />
                <Type>
                  {i.size}gr / {i.type}
                </Type>
                <Quanity>Quanity: {i.quanity} </Quanity>
                <Price> {i.price}</Price>
              </Content>
              <hr width="100%" align="center" />
            </Product>
          ))}
        </Products>
      </Top>
      <Bottom>
        <Title>TOTAL</Title>
        <Total>{priceTotal}</Total>
        <Clear onClick={handleClear}>Clear cart</Clear>
      </Bottom>
      <Link to={"/Cart/"}>
        <Space wrap style={{ display: "flex", justifyContent: "center" }}>
          <Button
            className="buttonBuy"
            ghost
            type="primary"
            size="large"
            style={{ backgroundColor: "beige" }}
          >
            {" "}
            Shopping Cart
          </Button>
        </Space>
      </Link>
    </Container>
  );
};

export default CartContent;
// dispatch(removeProduct(i.product._id))
