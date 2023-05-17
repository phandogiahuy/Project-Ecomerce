import { Button, Col, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Image, Infor, Title } from "./Style-CategoryItem";

const CategoriesItem = ({ item }) => {
  return (
    <Col
      className="gutter-row"
      md={{ span: 8 }}
      sm={{ span: 24 }}
      xs={{ span: 24 }}
      lg={{ span: 8 }}
    >
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
                  backgroundColor: "#e6f7ff",
                  letterSpacing: "1px",
                  fontSize: "20px",
                  marginLeft: "10px",
                  marginBottom: "20px",
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
    </Col>
  );
};

export default CategoriesItem;
