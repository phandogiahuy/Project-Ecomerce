import { ShoppingOutlined } from "@ant-design/icons";
import { Button, Card, Col, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Image, Infor, Name, Price } from "./style-newProduct";

const Product = ({ item }) => {
  return (
    <Col
      className="gutter-row"
      md={{ span: 6 }}
      sm={{ span: 12 }}
      xs={{ span: 24 }}
      lg={{ span: 6 }}
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
                  fontFamily: "g Guarantee', sans-serif",
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
