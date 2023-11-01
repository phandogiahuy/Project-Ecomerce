import {
  AuditOutlined,
  BulbOutlined,
  HeartOutlined,
  HomeOutlined,
  OneToOneOutlined,
  PlusOutlined,
  UpCircleFilled,
} from "@ant-design/icons";
import {
  Affix,
  Breadcrumb,
  Button,
  Collapse,
  FloatButton,
  Image,
  InputNumber,
  Radio,
  Select,
  Skeleton,
  Space,
} from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import AboutProduct from "../../../components/AboutProduct";
import Announcement from "../../../components/Annoucement";
import CommentComponent from "../../../components/Comment";
import Footer from "../../../components/Footer";
// import Panel from "antd/es/collapse/Panel";
import { Instruction } from "../../../components/Instruction";
import Navbar from "../../../components/NavBar";
import ProductInfor from "../../../components/ProductFeature";
import RecommendProduct from "../../../components/Recommend";
import { useGetProductById } from "../../../hooks/Queries/Product/useGetProductById";
import { addProduct } from "../../../reduxToolkit/cartRedux";
import {
  AddContainer,
  Container,
  Desc,
  FilterContainer,
  FilterTitle,
  ImgContainer,
  InforContainer,
  Price,
  PriceFirst,
  ProductFeature,
  Recommend,
  Sale,
  Title,
  Wrapper,
} from "./style";

const { Panel } = Collapse;
const Product = () => {
  const [type, setType] = useState("Bean");
  const location = useLocation();
  const [first, setFirst] = useState(false);
  const [quantity, setQuanity] = useState(1);
  const [size, setSize] = useState(250);
  const [price, setPrice] = useState(0);
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const res = useGetProductById(id);
  if (res.isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }

  const product = res.data;

  const onSelectProductSizeChange = (e) => {
    setFirst(true);
    if (e === 500) {
      setPrice(product.price[1]);
    } else if (e === 1000) {
      setPrice(product.price[2]);
    } else {
      setPrice(product.price[0]);
    }
  };
  const onAddToCartBtnClick = () => {
    const totalItem = price * quantity;
    if (!first) {
      dispatch(
        addProduct({
          product,
          price: Math.round(product.price[0] * (1 - product.sale / 100)),
          type,
          size,
          quantity,
          totalItem,
        })
      );
    } else {
      dispatch(
        addProduct({
          product,
          price: Math.round(price * (1 - product.sale / 100)),
          type,
          size,
          quantity,
          totalItem,
        })
      );
    }
  };
  const onChangeQuanity = (e) => {
    setQuanity(e);
  };
  return (
    <Container className="overflow-x-hidden">
      <Affix>
        <Announcement />
        <Navbar />
      </Affix>
      <Breadcrumb
        items={[
          {
            title: (
              <Link to="/">
                <HomeOutlined style={{ fontSize: "25px" }} />
                Home
              </Link>
            ),
          },
          {
            title: <p>Product</p>,
          },
        ]}
        className="ml-4 mt-3 text-[30px]"
      />
      <Wrapper>
        <ImgContainer>
          <Image
            style={{
              imageRendering: "pixelated",
              minHeight:"700px"
            }}
            width={650}
            src={product.img}
          ></Image>
        </ImgContainer>

        <InforContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>

          {!first ? (
            <div>
              <Price>
                {Math.round(product.price[0] * (1 - product.sale / 100))}$
              </Price>
              {product.sale > 0 && (
                <>
                  <PriceFirst>{product.price[0]}$</PriceFirst>
                  <Sale>
                    Sale {product.sale}% (
                    {product.price[0] -
                      Math.round(product.price[0] * (1 - product.sale / 100))}
                    $)
                  </Sale>
                </>
              )}
            </div>
          ) : (
            <div>
              <Price>{Math.round(price * (1 - product.sale / 100))}$</Price>
              {product.sale > 0 && (
                <>
                  <PriceFirst>{price}$</PriceFirst>
                  <Sale>
                    Sale {product.sale}% (
                    {price - Math.round(price * (1 - product.sale / 100))}$)
                  </Sale>
                </>
              )}
            </div>
          )}

          <FilterContainer>
            <FilterTitle>Size</FilterTitle>
            <Space wrap>
              <Select
                defaultValue="250g"
                style={{ width: 120 }}
                value={size}
                options={[
                  { value: 250, label: "250g" },
                  { value: 500, label: "500g" },
                  { value: 1000, label: "1000g" },
                ]}
                onSelect={(i) => setSize(i)}
                onChange={onSelectProductSizeChange}
              />
              <Radio.Group
                size="large"
                onChange={(e) => setType(e.target.value)}
                defaultValue="Bean"
              >
                <Radio value={"Bean"}>Bean</Radio>
                <Radio value={"Grind"}>Grind</Radio>
              </Radio.Group>
            </Space>
          </FilterContainer>
          <AddContainer>
            <InputNumber
              min={1}
              value={quantity}
              size="medium"
              className="mb-[1px] mr-[10px]"
              onChange={onChangeQuanity}
              type="number"
              onKeyDown={(evt) => {
                if (["e", "E", "+", "-", "0"].includes(evt.key)) {
                  evt.preventDefault();
                }
              }}
            />

            <Space wrap>
              <Button
                icon={<PlusOutlined />}
                type="primary"
                style={{ width: "300px" }}
                onClick={onAddToCartBtnClick}
              >
                ADD TO CART
              </Button>
            </Space>
          </AddContainer>
        </InforContainer>
      </Wrapper>

      <div
        className=" flex w-[100%]  p-5  "
        style={{ backgroundColor: "#d8f1e3" }}
      >
        <div className="w-[36.5%] bg-slate-50 p-6">
          <ProductFeature>
            {/* <h1>Product Feature</h1>
             */}
            <Collapse
              style={{ width: "100%" }}
              className=" bg-slate-50"
              // style={{ backgroundColor: "white" }}
              bordered={false}
              expandIcon={({ isActive }) => (
                <PlusOutlined
                  rotate={isActive ? 70 : 0}
                  style={{ fontSize: "30px" }}
                />
              )}
              expandIconPosition={"end"}
              accordion
            >
              <Panel
                header={
                  <h1
                    className="mt-[-3%] text-[35px] font-normal "
                    style={{ fontFamily: "'Cantora One', sans-serif" }}
                  >
                    <BulbOutlined /> Product Feature
                  </h1>
                }
                key="1"
              >
                <ProductInfor
                  place={product.place}
                  flavor={product.flavor}
                  process={product.process}
                />
              </Panel>
              <Panel
                header={
                  <h1
                    className=" mt-[-3%] text-[35px] font-normal "
                    style={{ fontFamily: "'Cantora One', sans-serif" }}
                  >
                    <AuditOutlined /> Instruction
                  </h1>
                }
                key="2"
                style={{ marginTop: "5%" }}
              >
                <Instruction />
              </Panel>
              <Panel
                header={
                  <h1
                    className="mt-[-3%] text-[35px] font-normal"
                    style={{ fontFamily: "'Cantora One', sans-serif" }}
                  >
                    <HeartOutlined /> Review From User
                  </h1>
                }
                key="3"
                style={{ marginTop: "5%" }}
              >
                {product.reviews && (
                  <CommentComponent
                    reviews={product.reviews}
                    id={product._id}
                    name={product.title}
                  />
                )}
              </Panel>
            </Collapse>
          </ProductFeature>
        </div>

        <div className=" ml-2  w-[55%] flex-col items-center bg-slate-50 p-6">
          <center className="mt-[-3%] text-[50px] font-normal ">
            <OneToOneOutlined /> About Our Coffee
          </center>
          <AboutProduct />
        </div>
      </div>
      <Recommend className="p-2">
        {product.categories && (
          <RecommendProduct products={product.categories[0]} />
        )}
      </Recommend>

      {/* <Newsletter /> */}
      <Footer />
      <FloatButton.BackTop
        icon={<UpCircleFilled />}
        style={{ marginBottom: "5%" }}
      />
    </Container>
  );
};

export default Product;
