import { ShoppingOutlined } from "@ant-design/icons";
import { Button, Card, Col, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Infor = styled.div`
  position: absolute;
  bottom: 26px;
  left: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  margin-left: 20px;

  :hover {
    transform: scale(1.1);
    box-shadow: inset 180px 0 0 0 #54b3d6;
    color: white;
  }
`;
const Name = styled.h1`
  margin-left: 50px;
  font-weight: 500;
`;
const Image = styled.img`
  height: 100%;
  width: 75%;
  cursor: pointer;
  image-rendering: pixelated;

  :hover {
    animation: bounce2 1s ease infinite;
  }
  @keyframes bounce2 {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;
const Price = styled.div`
  font-weight: 700;
  font-size: 30px;
  margin-left: 20px;
`;
// xs: 8,
// sm: 16,
// md: 24,
// lg: 32,
const Product = ({ item }) => {
  return (
    <Col
      className="gutter-row"
      md={{ span: 6 }}
      sm={{ span: 12 }}
      xs={{ span: 24 }}
      lg={{ span: 4 }}
    >
      <Card style={{ width: 400, border: "none" }}>
        <Link to={`/product/${item._id}`}>
          <Image src={item.img} />
        </Link>
        <Name>{item.title}</Name>
        <Price>{item.price[0]}$</Price>
        <Link to={`/product/${item._id}`}>
          <Infor>
            <Space wrap>
              <Button
                className="buttonBuy"
                ghost
                type="primary"
                icon={<ShoppingOutlined />}
                style={{
                  fontSize: "15px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  color: "#1C2F7F",
                  border: "#38498f solid 2px",
                }}
              >
                ORDER NOW
              </Button>
            </Space>
          </Infor>
        </Link>
      </Card>
    </Col>
  );
};

export default Product;
