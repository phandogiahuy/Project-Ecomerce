import { DeleteOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { clearCart, removeProduct } from "../../reduxToolkit/cartRedux";
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
} from "./style-cartContent";

const CartContent = ({ products }) => {
  const dispatch = useDispatch();
  if (products.length === 0) {
    return <div>No item in your cart</div>;
  }

  // products.map((i) => {
  //   x.push(i.price * i.quanity);
  //   return x;
  // });
  // let priceTotal = 0;
  // x.map((i) => {
  //   priceTotal += i;
  //   return x;
  // });
  const priceTotal = useMemo(() => {
    const priceEveryItem = [];
    products.forEach((item) => {
      priceEveryItem.push(item.price * item.quanity);
    });
    let result = 0;
    priceEveryItem.forEach((i) => {
      result += i;
    });
    return result;
  }, [products]);
  const ClickHandleClearCart = (e) => {
    e.preventDefault();
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
        <Clear onClick={ClickHandleClearCart}>Clear cart</Clear>
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
