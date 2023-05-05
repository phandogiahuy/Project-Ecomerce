import { DeleteOutlined } from "@ant-design/icons";
import { Affix, Button, Divider, Form, Input, InputNumber, Space } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeProduct, updateProduct } from "../reduxToolkit/cartRedux";
import StripeCheckout from "react-stripe-checkout";
import { useDiscount } from "../hooks/detail/useDiscounByCode";
import { AxiosInstance } from "../requestMethod";
import axios from "axios";
const KEY =
  "pk_test_51N15FaIul8LwwZP1lfPebnysBeq3X6VbETjXVtMBGDzUxso3Zc8Q5PCigXkhuigDkXgP8zpPOtqcJHE0VDiYplGO00PojfRw3e";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-family: "Arvo", serif;
  font-size: 40px;
  line-height: 52px;
  font-weight: 700;
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
  position: relative;
`;
const ProductName = styled.p`
  margin-left: 10px;
  font-weight: 400;
  font-family: "Arvo", serif;
`;

const ProductQuanity = styled.p`
  margin-left: 30px;
`;
const TypeItem = styled.p`
  position: absolute;
  top: 22%;
  left: 22%;
  font-size: 14px;
  font-family: "Arvo", serif;
`;

const ProductPrice = styled.p`
  font-family: "Work Sans", sans-serif;
`;
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
const SummaryDiscount = styled.span`
  display: flex;
  position: relative;
  margin-bottom: 25px;
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const InforDiscount = styled.p`
  position: absolute;
  font-size: 16px;
  top: 40px;
`;
const Cart = () => {
  const [top, setTop] = useState(10);
  const { products } = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  const [discount, setDiscount] = useState(0);
  const [discounts, getDiscounts] = useState(0);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };
  const handleDiscount = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/discount/${discount}`
      );
      getDiscounts(res.data[0].sale);
    } catch (error) {}
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await AxiosInstance.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate("/success", {
          stripeData: res.data,
          products: products,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, products.total, navigate]);
  const dispatch = useDispatch();

  const handleChange = (item, e) => {
    dispatch(
      updateProduct({
        products: item,
        quanity: e,
      })
    );
  };
  const x = [];
  products.map((i) => {
    x.push(i.price * i.quanity);
  });
  let priceTotal = 0;
  x.map((i) => {
    priceTotal += i;
  });
  let ship = 0;
  if (priceTotal < 100) {
    ship = 10;
  } else {
    ship = 0;
  }
  let priceAllProduct = (priceTotal + ship) * (1 - discounts / 100);
  if (priceTotal === 0) {
    priceAllProduct = 0;
    ship = 0;
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your cart</Title>
        <Top>
          <Link to={"/"}>
            <Continue>Continue Shopping</Continue>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag({products.length})</TopText>
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
          {products.map((item) => (
            <Product key={item.product._id}>
              <ProductDetail>
                <ProductImage src={item.product.img}></ProductImage>
                <ProductName>{item.product.title}</ProductName>
                <TypeItem>
                  {item.size}gr/{item.type}
                </TypeItem>
              </ProductDetail>
              <ProductType>
                <ProductQuanity>
                  <InputNumber
                    min={1}
                    value={item.quanity}
                    size="medium"
                    style={{ marginRight: "10px", marginBottom: "1px" }}
                    onChange={(e) => handleChange(item, e)}
                  />
                  <DeleteOutlined
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      dispatch(
                        removeProduct({
                          id: item.product._id,
                          type: item.type,
                          size: item.size,
                        })
                      )
                    }
                  />
                </ProductQuanity>
                <ProductPrice>{item.price * item.quanity}</ProductPrice>
              </ProductType>
            </Product>
          ))}
        </Middle>
        <Divider></Divider>
        <Bottom>
          <Summary>
            <SummaryDiscount>
              <Input
                placeholder="Discount"
                size="large"
                style={{ marginRight: 10 }}
                onChange={(e) => setDiscount(e.target.value)}
              />
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                onClick={handleDiscount}
              >
                Submit
              </Button>
              {discounts ? (
                <InforDiscount>
                  You are discount about {discounts}% for total
                </InforDiscount>
              ) : (
                <InforDiscount>
                  Please input discount code in here
                </InforDiscount>
              )}
            </SummaryDiscount>
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
              <SummaryItemPrice>{priceTotal}</SummaryItemPrice>
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
                  Estimated Shipping:
                </b>
              </SummaryItemText>
              <SummaryItemPrice>{ship}</SummaryItemPrice>
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
              <SummaryItemPrice>{discounts}%</SummaryItemPrice>
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
              <SummaryItemPrice>{priceAllProduct}</SummaryItemPrice>
            </SummaryItem>

            {currentUser ? (
              <StripeCheckout
                name="AROMA deLUTE"
                image="/logo.jpeg"
                billingAddress
                shippingAddress
                description={`Your total is $${priceAllProduct}`}
                amount={priceAllProduct * 100}
                token={onToken}
                stripeKey={KEY}
              >
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
              </StripeCheckout>
            ) : (
              <Space wrap style={{ display: "flex", flexDirection: "column" }}>
                <Link to={"/login"}>Please login before buying products</Link>
                <Link to={"/register"}>Click to register if no account</Link>
              </Space>
            )}
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Cart;
