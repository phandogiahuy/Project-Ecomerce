import { DeleteOutlined } from "@ant-design/icons";
import {
  Affix,
  Button,
  Divider,
  Form,
  Image,
  Input,
  InputNumber,
  Space,
  message,
} from "antd";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  clearCart,
  removeProduct,
  updateCart,
  updateProduct,
} from "../../reduxToolkit/cartRedux";
import StripeCheckout from "react-stripe-checkout";
import { useGetDiscountByCode } from "../../hooks/Queries/Discount/useGetDiscounByCode";
import { axiosInstance } from "../../Service-api/requestMethod";
import {
  Bottom,
  Checkout,
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
  Step,
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
import axios from "axios";
import Announcement from "../../components/Annoucement/Index";
import Navbar from "../../components/NavBar/Index";
import Newsletter from "../../components/Footer/Newsletter";
import Footer from "../../components/Footer/Footer";
import MySteps from "../../components/Steps";
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

      if (res.isSuccess) {
        setDiscounts(res.data[0].sale);
        setLimit(res.data[0].limit);
      }
    } catch (error) {
      return message.error("Code Discount is Wrong");
    }
  };
  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       const res = await axios.post("localhost:3000/api/checkout/payment", {
  //         tokenId: stripeToken.id,
  //         amount: 500,
  //       });
  //       navigate("/success", {
  //         stripeData: res.data,
  //         products: products,
  //       });
  //       console.log(res);
  //     } catch {}
  //   };
  //   stripeToken && makeRequest();
  // }, [stripeToken, products.total, navigate]);
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
  const handleClickCheckout = (e) => {
    dispatch(
      updateCart({
        priceProduct: priceAllProduct,
        shipping: ship,
      })
    );
  };
  const handleClickEmpty = (e) => {
    return message.error("Your Cart Is Empty");
  };
  return (
    <Container>
      <Announcement />
      <Wrapper>
        <Title>Your cart</Title>
        <Top>
          <Link to={"/"}>
            <Continue>Continue Shopping</Continue>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag ({products.length})</TopText>
          </TopTexts>
          <Step>
            <MySteps step={0} />
          </Step>
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
                <Image src={item.product.img}></Image>
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
                    type="number"
                    onKeyDown={(evt) => {
                      if (["e", "E", "+", "-"].includes(evt.key)) {
                        evt.preventDefault();
                      }
                    }}
                  />
                  <DeleteOutlined
                    className="ml-[10px] mt-3 cursor-pointer text-2xl"
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

            <Checkout>
              <Space wrap>
                {priceAllProduct > 0 ? (
                  <Link to={"checkout"}>
                    <Button
                      ghost
                      type="primary"
                      style={{
                        backgroundColor: "#fff9e7",
                        width: 349,
                        height: 44,
                        color: "#69410b",
                        fontSize: 20,
                      }}
                      onClick={handleClickCheckout}
                    >
                      Check out{" "}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    ghost
                    type="primary"
                    style={{
                      backgroundColor: "#b0ab9b",
                      width: 349,
                      height: 44,
                      color: "#11110d",
                      fontSize: 20,
                    }}
                    onClick={handleClickEmpty}
                  >
                    Your cart is empty
                  </Button>
                )}
              </Space>
            </Checkout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Cart;
{
  /* <StripeCheckout
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
</StripeCheckout> */
}
