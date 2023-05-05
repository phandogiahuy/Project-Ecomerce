import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Divider, Space } from "antd";
import Item from "antd/es/list/Item";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeProduct } from "../reduxToolkit/cartRedux";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  width: 423px;
  flex-direction: column;
`;
const Top = styled.div``;
const Img = styled.img`
  width: 85px;
  height: 85px;
`;
const Title = styled.p`
  font-weight: 500;
  font-family: "Quicksand", sans-serif;
  font-size: 14px;
  line-height: 20px;
`;
const Content = styled.div`
  display: flex;
  position: absolute;
  top: 1px;
  left: 100px;
`;
const Name = styled.p`
  font-size: 13px;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  line-height: 19px;
`;
const Quanity = styled.p`
  position: absolute;
  top: 50px;
  font-size: 15px;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  line-height: 24px;
`;

const Total = styled.p`
  font-weight: 600;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
`;
const Bottom = styled.div``;
const Price = styled.p`
  margin-left: 150px;
  margin-top: 55px;
  font-weight: 600;
  font-family: "Quicksand", sans-serif;
`;
const Product = styled.div`
  position: relative;
  margin-top: 10px;
`;
const Type = styled.p`
  position: absolute;
  top: 15px;
  font-weight: 400;
  font-family: "Quicksand", sans-serif;
`;

const Products = styled.div``;
const CartContent = ({ products, total }) => {
  const dispatch = useDispatch();
  if (products.length === 0) {
    return <div>No item in your cart</div>;
  }
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
        <Total>{total}</Total>
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
