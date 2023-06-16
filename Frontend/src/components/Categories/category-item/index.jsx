import { Button, Col, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Image, Infor, Title } from "./style-categoryItem";

const CategoriesItem = ({ item }) => {
  return (
    <Container>
      <Link to={`products/${item.cat}`}>
        <Image src={item.img} />
      </Link>
      <Infor>
        <Title>{item.title}</Title>
        <Space wrap>
          <Link to={`products/${item.cat}`}>
            <Button
              style={{
                display: "flex",
                backgroundColor: "#68c42e",
                letterSpacing: "1px",
                fontSize: "20px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              SEE MORE
            </Button>
          </Link>
        </Space>
      </Infor>
    </Container>
  );
};

export default CategoriesItem;
