import { DeleteOutlined } from "@ant-design/icons";
import { Affix, Button, Divider, Form, Input, InputNumber, Space } from "antd";
import React, { useEffect, useState } from "react";

import Announcement from "../../components/Annoucement/Annoucement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/Navbar";
import Newsletter from "../../components/Footer/Newsletter";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  clearCart,
  removeProduct,
  updateProduct,
} from "../../reduxToolkit/cartRedux";
import StripeCheckout from "react-stripe-checkout";
import { useGetDiscountByCode } from "../../hooks/Queries/Discount/useGetDiscounByCode";
import { axiosInstance } from "../../Service-api/requestMethod";
import {
  Bottom,
  ClearCart,
  Container,
  Continue,
  InforDiscount,
  Middle,
  Price,
  Product,
  ProductDetail,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductQuanity,
  ProductType,
  Quanity,
  Summary,
  SummaryDiscount,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
  Title,
  Top,
  TopText,
  TopTexts,
  Type,
  TypeItem,
  TypeProduct,
  Wrapper,
} from "./Style-Cart";
const KEY =
  "pk_test_51N15FaIul8LwwZP1lfPebnysBeq3X6VbETjXVtMBGDzUxso3Zc8Q5PCigXkhuigDkXgP8zpPOtqcJHE0VDiYplGO00PojfRw3e";

const Cart = () => {
  const [top, setTop] = useState(10);
  const { products } = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  // const { currentUser } = useSelector((state) => state.user);
  const [discount, setDiscount] = useState(0);
  const [discounts, setDiscounts] = useState(0);
  const [limit, setLimit] = useState(0);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const resDiscount = useGetDiscountByCode(discount);
  const onToken = (token) => {
    setStripeToken(token);
  };
  const handleDiscount = async () => {
    try {
      const res = resDiscount;
      if (res.isLoading) {
        return <div>...loading</div>;
      }
      if (res.error) {
        return <div>{res.error.message}</div>;
      }
      if (res.isSuccess) {
        setDiscounts(res.data[0].sale);
        setLimit(res.data[0].limit);
      }
    } catch (error) {}
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axiosInstance.post("/checkout/payment", {
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

  let freeShip = 100 - priceTotal;
  const handleClear = () => {
    dispatch(clearCart());
  };
  const onChangeDiscount = (e) => {
    setDiscount(e.target.value);
  };
  let discountApply = 0;
  if (limit < priceTotal) {
    discountApply = discounts;
  }
  let priceAllProduct = (priceTotal + ship) * (1 - discountApply / 100);
  if (priceTotal === 0) {
    priceAllProduct = 0;
    ship = 0;
  }
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your cart</Title>
        <Top>
          <Link to={"/"}>
            <Continue>Continue Shopping</Continue>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag ({products.length})</TopText>
          </TopTexts>
        </Top>
        <Middle>
          <Type>
            <TypeProduct>Product</TypeProduct>
            <Quanity>Quantity</Quanity>
            <Price>Price</Price>
          </Type>
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
                    style={{ marginBottom: "1px", width: "60%" }}
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
                <ProductPrice>{item.price * item.quanity}$</ProductPrice>
              </ProductType>
            </Product>
          ))}
        </Middle>
        <Divider></Divider>
        <ClearCart onClick={handleClear}>Clear cart</ClearCart>
        <Bottom>
          <Summary>
            <SummaryDiscount>
              <Input
                placeholder="Discount"
                size="large"
                style={{ marginRight: 10 }}
                onChange={onChangeDiscount}
              />
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                onClick={handleDiscount}
              >
                Submit
              </Button>
              {limit < priceTotal && discounts ? (
                <InforDiscount>
                  You are discount about {discounts}% for total
                </InforDiscount>
              ) : limit >= priceTotal && discounts ? (
                <InforDiscount>
                  You are not eligible to apply this discount code
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

            {freeShip > 0 && (
              <SummaryItem>
                <SummaryItemText>
                  <b
                    style={{
                      fontSize: 15,
                    }}
                  >
                    (Buying more {freeShip}$ to give free shipping)
                  </b>
                </SummaryItemText>
              </SummaryItem>
            )}
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
              <SummaryItemPrice>{discountApply}%</SummaryItemPrice>
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
              <SummaryItemPrice>{Math.round(priceAllProduct)}</SummaryItemPrice>
            </SummaryItem>

            {token ? (
              <StripeCheckout
                name="AROMA deLUTE"
                image="/logo.jpeg"
                billingAddress
                shippingAddress
                description={`Your total is $${Math.round(priceAllProduct)}`}
                amount={Math.round(priceAllProduct) * 100}
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
