import { ShoppingOutlined } from "@ant-design/icons";
import { Badge, Button, Card, Col, Rate, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import { Image, Infor, Name, PriceFirst, Title } from "./style-newProduct";

const Product = ({ item }) => {
  const rate = [];
  item.reviews.forEach((review) => rate.push(review.rating));
  const sumOfRatings = rate.reduce((acc, r) => acc + r, 0);

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
      {item.sale > 0 ? (
        <Badge
          count={`-${item.sale}%`}
          style={{
            zIndex: "1",
            marginRight: "100px",
            marginTop: "50px",
            fontSize: "20px",
            color: "yellow",
          }}
          color="black"
        >
          <Card style={{ width: 400, border: "none" }}>
            <Link to={`/product/${item._id}`}>
              <Image src={item.img} />
            </Link>
            <Title>
              <div>
                <Rate disabled value={totalRating} allowHalf />(
                {item.reviews.length} reviews)
              </div>
              <Name>{item.title}</Name>
              <PriceFirst>
                {Math.ceil(item.price[0] * (1 - item.sale / 100))}$
                <span className="text-slate-300 line-through">
                  {" "}
                  ({item.price[0]}$)
                </span>
              </PriceFirst>
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
            </Title>
          </Card>
        </Badge>
      ) : (
        <Card style={{ width: 400, border: "none" }}>
          <Link to={`/product/${item._id}`}>
            <Image src={item.img} />
          </Link>
          <Title>
            <div>
              <Rate disabled value={totalRating} allowHalf />(
              {item.reviews.length} reviews)
            </div>
            <Name>{item.title}</Name>
            <PriceFirst>{item.price[0]}$</PriceFirst>
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
          </Title>
        </Card>
      )}
    </Col>
  );
};

export default Product;
