/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
import { DeleteOutlined } from "@ant-design/icons";
import {
  Button,
  Divider,
  Image,
  Input,
  InputNumber,
  message,
  Space,
} from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Announcement from "../../components/Annoucement/Index";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Footer/Newsletter";
import MySteps from "../../components/Steps";
import { useGetDiscountByCode } from "../../hooks/Queries/Discount/useGetDiscounByCode";
import {
  clearCart,
  removeProduct,
  updateCart,
  updateProduct,
} from "../../reduxToolkit/cartRedux";
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

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [discount, setDiscount] = useState(0);

  const { mutate: checkDiscountCode, data, isLoading } = useGetDiscountByCode();

  const calculateFee = () => {
    const priceTotal = products.reduce(
      (pre, item) => pre + item.price * item.quantity,
      0
    );
    let ship = 0;
    if (priceTotal < 100) {
      ship = 10;
    }

    const discounts = data?.length ? data[0]?.sale : 0;
    const limit = data?.length ? data[0].limit : 0;
    let discountApply = 0;
    if (limit < priceTotal) {
      discountApply = discounts;
    }
    let priceAllProduct = (priceTotal + ship) * (1 - discountApply / 100);
    if (priceTotal === 0) {
      priceAllProduct = 0;
      ship = 0;
    }
    const freeShip = 100 - priceTotal;
    return { priceAllProduct, ship, discountApply, priceTotal, freeShip };
  };
  const handleDiscount = async () => {
    checkDiscountCode({ code: discount });
  };

  const handleChange = (item, quantity) => {
    dispatch(
      updateProduct({
        products: item,
        quantity,
      })
    );
  };

  const handleClear = () => {
    dispatch(clearCart());
  };
  const onChangeDiscount = (e) => {
    setDiscount(e.target.value);
  };

  const handleClickCheckout = ({ priceProduct, shipping }) => {
    dispatch(
      updateCart({
        priceProduct,
        shipping,
      })
    );
  };
  const handleClickEmpty = () => {
    message.error("Your Cart Is Empty");
  };
  const { priceAllProduct, ship, discountApply, priceTotal, freeShip } =
    calculateFee();
  return (
    <Container className="overflow-x-hidden">
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
        <Middle className="h-fit overflow-scroll overflow-x-hidden ">
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
                    value={item.quantity}
                    size="medium"
                    style={{ marginBottom: "1px", width: "60%" }}
                    onChange={(quantity) => handleChange(item, quantity)}
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
                <ProductPrice>{item.price * item.quantity}$</ProductPrice>
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
                loading={isLoading}
              >
                Submit
              </Button>
              {data?.length &&
                (data[0].limit < priceTotal && data[0].sale ? (
                  <InforDiscount>
                    You are discount about {data[0].sale}% for total
                  </InforDiscount>
                ) : data[0].limit >= priceTotal && data[0].sale ? (
                  <InforDiscount>
                    You are not eligible to apply this discount code
                  </InforDiscount>
                ) : (
                  <InforDiscount>
                    Please input discount code in here
                  </InforDiscount>
                ))}
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
                      onClick={() =>
                        handleClickCheckout({
                          priceProduct: priceAllProduct,
                          shipping: ship,
                        })
                      }
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
