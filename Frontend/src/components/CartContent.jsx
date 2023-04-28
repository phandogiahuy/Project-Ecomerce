import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Divider, Space } from "antd";
import Item from "antd/es/list/Item";
import React from "react";
import styled from "styled-components";

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
  margin-top: 50px;
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
const CartContent = ({
  products,
  quanityItem,
  total,
  type,
  size,
  priceTotal,
}) => {
  return (
    <Container>
      <Top>
        <Products>
          {products.map((item) => (
            <Product key={item.title}>
              <Img src={item.img} />
              <Content>
                <Name>{item.title}</Name>
                <Type>
                  {size} / {type}
                </Type>
                <Quanity>Quanity: {quanityItem} </Quanity>
                <Price> {total}</Price>
              </Content>
              <hr width="100%" align="center" />
            </Product>
          ))}
        </Products>
      </Top>
      <Bottom>
        <Title>TOTAL</Title>
        <Total>{priceTotal}</Total>
      </Bottom>
      <Space wrap>
        <Button
          className="buttonBuy"
          ghost
          type="primary"
          size="large"
          style={{ marginTop: 150, marginRight: 70 }}
        >
          {" "}
          Shopping Cart
        </Button>
      </Space>
    </Container>
  );
};

export default CartContent;
