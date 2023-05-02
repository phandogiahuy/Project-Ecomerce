import { Button, Col, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  margin-bottom: 5px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Infor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-weight: bolder;
  font-size: 30px;
  margin-bottom: 20px;

`;
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
                  backgroundColor: "peachpuff",
                  letterSpacing: "1px",
                  fontSize: "20px",
                  marginLeft: "10px",
                  border: "none",
                  padding: "5px",
                  marginBottom: "20px",
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
