import { PlusOutlined } from "@ant-design/icons";
import { Button, InputNumber, Select, Space } from "antd";
import React from "react";
import styled from "styled-components";

import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Img = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InforContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 500;
`;
const Desc = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
  margin: 30px 0;
`;
const FilterTitle = styled.span`
  font-weight: 500;
  font-size: 20px;
`;
const AddContainer = styled.div`
  display: flex;
`;
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Img src="/PopularProduct/1.jpg"></Img>
        </ImgContainer>
        <InforContainer>
          <Title> 100% Robusta Pure Machine Brewed Coffee</Title>
          <Desc>
            100% Robusta Gia Lai <br />
            <b style={{ fontWeight: "700" }}> Varieties: </b> Canephora Robusta
            Preliminary <br /> <b style={{ fontWeight: "700" }}>processing: </b>{" "}
            Natural (naturally dried embr/yos) <br />{" "}
            <b style={{ fontWeight: "700" }}>Altitude: </b>600m - 800m <br />{" "}
            <b style={{ fontWeight: "700" }}>Region: </b> Gia Lai - Vietnam
            Roast <br />
            <b style={{ fontWeight: "700" }}>level: </b>
            Medium Dark
          </Desc>
          <Price>20000₫</Price>
          <FilterContainer>
            <FilterTitle>Size</FilterTitle>
            <Space wrap>
              <Select
                defaultValue="250g"
                style={{ width: 120 }}
                options={[
                  { value: 250, label: "250g" },
                  { value: 500, label: "500g" },
                  { value: 1000, label: "1000g" },
                ]}
              />
            </Space>
          </FilterContainer>
          <AddContainer>
            <InputNumber
              min={1}
              defaultValue={1}
              size="medium"
              style={{ marginRight: "10px", marginBottom: "1px" }}
            />
            <Space wrap>
              <Button
                icon={<PlusOutlined />}
                type="primary"
                style={{ width: "300px" }}
              >
                ADD TO CART
              </Button>
            </Space>
          </AddContainer>
        </InforContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
