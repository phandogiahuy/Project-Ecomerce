import { ShoppingOutlined } from "@ant-design/icons";
import { Badge, Button, Card, Col, Rate, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import {
  ButtonOrder,
  ButtonSpan,
  Image,
  Infor,
  InforButton,
  Name,
  PriceFirst,
  Title,
} from "./style";

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
      md={{ span: 8 }}
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
            marginTop: "80px",
            fontSize: "20px",
            color: "yellow",
          }}
          color="black"
        >
          <Card
            style={{
              minWidth: "10rem",
              maxHeight: "50em",
              minHeight:"30em",
              border: "none",
              boxShadow: "1px 2px 3px 4px rgba(20,20,20,0.4)",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
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
                {Math.round(item.price[0] * (1 - item.sale / 100))}$
                <span className="text-slate-300 line-through">
                  {" "}
                  ({item.price[0]}$)
                </span>
              </PriceFirst>

              <Infor>
                <Space wrap>
                  <Link to={`/product/${item._id}`}>
                    <InforButton>
                      <ButtonOrder>
                        <ButtonSpan>Order now</ButtonSpan>
                      </ButtonOrder>
                    </InforButton>
                  </Link>
                </Space>
              </Infor>
            </Title>
          </Card>
        </Badge>
      ) : (
        <Card
          style={{
            minWidth: "10rem",
            maxHeight: "50em",
            minHeight:"30em",
            border: "none",
            boxShadow: "1px 2px 3px 4px rgba(20,20,20,0.4)",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <Link to={`/product/${item._id}`}>
            <Image src={item.img} />
          </Link>
          <Title>
            <div >
              <Rate disabled value={totalRating} allowHalf />(
              {item.reviews.length} reviews)
            </div>
            <Name>{item.title}</Name>
            <PriceFirst>{item.price[0]}$</PriceFirst>

            <Infor>
              <Space wrap>
                <Link to={`/product/${item._id}`}>
                  <InforButton>
                    <ButtonOrder>
                      <ButtonSpan>Order now</ButtonSpan>
                    </ButtonOrder>
                  </InforButton>
                </Link>
              </Space>
            </Infor>
          </Title>
        </Card>
      )}
    </Col>
  );
};

export default Product;
// icon={<ShoppingOutlined />}
