import { DeleteOutlined } from "@ant-design/icons";
import { Affix, Button, Divider, InputNumber, Space } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-family: "Arvo", serif;
  font-size: 40px;
  line-height: 52px;
`;
const Top = styled.div``;
const Continue = styled.a`
  font-family: "Work Sans", sans-serif;
  text-decoration: underline;
  margin-left: 1300px;
  transition: all 0.5s ease-out;
  cursor: pointer;
  :hover {
    font-size: large;
    text-decoration: none;
  }
`;
const Middle = styled.div`
  margin-bottom: 30px;
`;

const ProductImage = styled.img`
  max-width: 20%;
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Type = styled.div`
  display: flex;
  justify-content: space-around;
  z-index: 1;
`;
const TypeProduct = styled.span`
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
`;
const Quanity = styled.span`
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
`;
const Price = styled.span`
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProductDetail = styled.span`
  display: flex;
  width: 30%;
  margin-left: 100px;
  margin-top: 20px;
`;
const ProductName = styled.p`
  margin-left: 10px;
`;
const ProductQuanity = styled.p`
  margin-left: 30px;
`;
const ProductPrice = styled.p``;
const ProductType = styled.span`
  display: flex;
  width: 80%;
  justify-content: space-around;
`;
const Bottom = styled.div``;
const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 20px;
  padding: 20px;
`;
const SummaryItem = styled.span`
  padding: 10px;
`;
const SummaryTitle = styled.h1``;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Cart = () => {
  const [top, setTop] = useState(10);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your cart</Title>
        <Top>
          <Continue>Continue Shopping</Continue>
          <TopTexts>
            <TopText>Shopping Bag(1)</TopText>
          </TopTexts>
        </Top>
        <Middle>
          <Affix offsetTop={top}>
            <Type>
              <TypeProduct>Product</TypeProduct>
              <Quanity>Quanity</Quanity>
              <Price>Price</Price>
            </Type>
          </Affix>
          <Divider></Divider>
          <Product>
            <ProductDetail>
              <ProductImage src="/PopularProduct/1.jpg"></ProductImage>
              <ProductName>Robusta từ việt nam</ProductName>
            </ProductDetail>
            <ProductType>
              <ProductQuanity>
                <InputNumber
                  min={1}
                  defaultValue={1}
                  size="medium"
                  style={{ marginRight: "10px", marginBottom: "1px" }}
                />
                <DeleteOutlined />
              </ProductQuanity>
              <ProductPrice>125,000đ</ProductPrice>
            </ProductType>
          </Product>
          <Product>
            <ProductDetail>
              <ProductImage src="/PopularProduct/1.jpg"></ProductImage>
              <ProductName>Robusta từ việt nam</ProductName>
            </ProductDetail>
            <ProductType>
              <ProductQuanity>
                <InputNumber
                  min={1}
                  defaultValue={1}
                  size="medium"
                  style={{ marginRight: "10px", marginBottom: "1px" }}
                />
                <DeleteOutlined />
              </ProductQuanity>
              <ProductPrice>125,000đ</ProductPrice>
            </ProductType>
          </Product>
          <Product>
            <ProductDetail>
              <ProductImage src="/PopularProduct/1.jpg"></ProductImage>
              <ProductName>Robusta từ việt nam</ProductName>
            </ProductDetail>
            <ProductType>
              <ProductQuanity>
                <InputNumber
                  min={1}
                  defaultValue={1}
                  size="medium"
                  style={{ marginRight: "10px", marginBottom: "1px" }}
                />
                <DeleteOutlined />
              </ProductQuanity>
              <ProductPrice>125,000đ</ProductPrice>
            </ProductType>
          </Product>
          <Product>
            <ProductDetail>
              <ProductImage src="/PopularProduct/1.jpg"></ProductImage>
              <ProductName>Robusta từ việt nam</ProductName>
            </ProductDetail>
            <ProductType>
              <ProductQuanity>
                <InputNumber
                  min={1}
                  defaultValue={1}
                  size="medium"
                  style={{ marginRight: "10px", marginBottom: "1px" }}
                />
                <DeleteOutlined />
              </ProductQuanity>
              <ProductPrice>125,000đ</ProductPrice>
            </ProductType>
          </Product>
          <Product>
            <ProductDetail>
              <ProductImage src="/PopularProduct/1.jpg"></ProductImage>
              <ProductName>Robusta từ việt nam</ProductName>
            </ProductDetail>
            <ProductType>
              <ProductQuanity>
                <InputNumber
                  min={1}
                  defaultValue={1}
                  size="medium"
                  style={{ marginRight: "10px", marginBottom: "1px" }}
                />
                <DeleteOutlined />
              </ProductQuanity>
              <ProductPrice>125,000đ</ProductPrice>
            </ProductType>
          </Product>
        </Middle>
        <Divider></Divider>
        <Bottom>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>
                <b
                  style={{
                    fontWeight: "700",
                    fontFamily: "Arvo, serif",
                    fontSize: 16,
                  }}
                >
                  Subtotal:{" "}
                </b>
              </SummaryItemText>
              <SummaryItemPrice>80,000đ</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>
                <b
                  style={{
                    fontWeight: "700",
                    fontFamily: "Arvo, serif",
                    fontSize: 16,
                  }}
                >
                  Estimated Shipping:{" "}
                </b>
              </SummaryItemText>
              <SummaryItemPrice>80,000đ</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>
                <b
                  style={{
                    fontWeight: "700",
                    fontFamily: "Arvo, serif",
                    fontSize: 16,
                  }}
                >
                  Discount:{" "}
                </b>
              </SummaryItemText>
              <SummaryItemPrice>80,000đ</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>
                <b
                  style={{
                    fontWeight: "700",
                    fontFamily: "Arvo, serif",
                    fontSize: 16,
                  }}
                >
                  Total:{" "}
                </b>
              </SummaryItemText>
              <SummaryItemPrice>80,000đ</SummaryItemPrice>
            </SummaryItem>
            <Space wrap>
              <Button
                ghost
                type="primary"
                style={{
                  backgroundColor: "#d6caa5",
                  width: 349,
                  height: 44,
                  color: "#69410b",
                  fontSize: 20,
                }}
              >
                Check out{" "}
              </Button>
            </Space>
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Cart;
