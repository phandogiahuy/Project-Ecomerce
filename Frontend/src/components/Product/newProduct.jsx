import { ShoppingOutlined } from "@ant-design/icons";
import { Button, Card, Col, Rate, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Image, Infor, Name, Price } from "./style-newProduct";

const Product = ({ item }) => {
  const rate = [];
  item.reviews.forEach((review) => rate.push(review.rating));
  const sumOfRatings = rate.reduce((acc, rate) => acc + rate, 0);

  // // Calculate the average rating
  const averageRating = sumOfRatings / rate.length;

  // // Round the average rating to a specific decimal place (e.g., 1 decimal place)
  const totalRating = averageRating.toFixed(1);
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
        <Rate disabled value={totalRating} allowHalf className="ml-[30%]" />(
        {item.reviews.length} reviews)<Name>{item.title}</Name>
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
