import { ShoppingOutlined } from "@ant-design/icons";
import { Button, Card, Col, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Infor = styled.div`
  position: absolute;
  bottom: 20px;
  left: 130px;
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

const Image = styled.img`
  height: 100%;
  width: 90%;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;
const Price = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-left: 30px;
`;
// xs: 8,
// sm: 16,
// md: 24,
// lg: 32,
const Product = ({ item }) => {
  return (
    <Col
      className="gutter-row"
      md={{ span: 8 }}
      sm={{ span: 12 }}
      xs={{ span: 24 }}
      lg={{ span: 6 }}
    >
      <Card style={{ width: 550, border: "none" }}>
        <Link to={`/product/${item._id}`}>
          <Image src={item.img} />
        </Link>
        <Price>{item.price[0]}₫</Price>
        <Link to={`/product/${item._id}`}>
          <Infor>
            <Space wrap>
              <Button
                className="buttonBuy"
                ghost
                type="primary"
                icon={<ShoppingOutlined />}
                style={{
                  fontSize: "20px",
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
