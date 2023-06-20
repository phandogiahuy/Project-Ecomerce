import {
  AuditOutlined,
  BulbOutlined,
  HeartOutlined,
  OneToOneOutlined,
  PlusOutlined,
  UpCircleFilled,
} from "@ant-design/icons";
import {
  Affix,
  Button,
  Collapse,
  Divider,
  FloatButton,
  Image,
  InputNumber,
  Radio,
  Rate,
  Select,
  Skeleton,
  Space,
} from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { addProduct } from "../../../reduxToolkit/cartRedux";
import { useDispatch } from "react-redux";
import { axiosInstance } from "../../../Service-api/requestMethod";
import {
  AddContainer,
  Comment,
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
import Navbar from "../../../components/NavBar";
import Announcement from "../../../components/Annoucement";
import Newsletter from "../../../components/Footer/Newsletter";
import Footer from "../../../components/Footer/Footer";
import CommentComponent from "../../../components/Comment";
import PopularProduct from "../../../components/Product/PopularProduct";
import RecommendProduct from "../../../components/Recommend";
import ProductInfor from "../../../components/ProductFeature";
// import Panel from "antd/es/collapse/Panel";
import { Instruction } from "../../../components/Instruction";
import AboutProduct from "../../../components/AboutProduct";
import { useGetProductById } from "../../../hooks/Queries/Product/useGetProductById";
import { QueryClient } from "react-query";
const { Panel } = Collapse;
const Product = () => {
  const [type, setType] = useState("Bean");
  const location = useLocation();
  const [first, setFirst] = useState(false);
  const [quanity, setQuanity] = useState(1);
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
    const totalItem = price * quanity;
    if (!first) {
      dispatch(
        addProduct({
          product,
          price: Math.ceil(product.price[0] * (1 - product.sale / 100)),
          type: type,
          size: size,
          quanity: quanity,
          totalItem: totalItem,
        })
      );
    } else
      dispatch(
        addProduct({
          product,
          price: Math.ceil(price * (1 - product.sale / 100)),
          type: type,
          size: size,
          quanity: quanity,
          totalItem: totalItem,
        })
      );
  };
  const onChangeQuanity = (e) => {
    setQuanity(e);
  };
  const items = [
    {
      key: "1",
      label: "This is panel header 1",
      children: <p>text</p>,
    },
  ];
  return (
    <Container className="overflow-x-hidden">
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image
            style={{
              imageRendering: "pixelated",
            }}
            width={550}
            src={product.img}
          ></Image>
        </ImgContainer>

        <InforContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>

          {!first ? (
            <div>
              <Price>
                {Math.ceil(product.price[0] * (1 - product.sale / 100))}$
              </Price>
              {product.sale > 0 && (
                <>
                  <PriceFirst>{product.price[0]}$</PriceFirst>
                  <Sale>
                    Sale {product.sale}% (
                    {product.price[0] -
                      Math.ceil(product.price[0] * (1 - product.sale / 100))}
                    $)
                  </Sale>
                </>
              )}
            </div>
          ) : (
            <div>
              <Price>{Math.ceil(price * (1 - product.sale / 100))}$</Price>
              {product.sale > 0 && (
                <>
                  <PriceFirst>{price}$</PriceFirst>
                  <Sale>
                    Sale {product.sale}% (
                    {price - Math.ceil(price * (1 - product.sale / 100))}$)
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
              value={quanity}
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
      <Divider />
      <div className=" flex w-[100%] p-5 ">
        <div className="w-[50%]">
          <ProductFeature>
            {/* <h1>Product Feature</h1>
             */}
            <Collapse
              style={{ width: "100%", backgroundColor: "white" }}
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

          {/* <div className="w-[50%] self-start ">
            <Collapse
              defaultActiveKey={["1"]}
              style={{ width: "180%", backgroundColor: "white" }}
              bordered={false}
              expandIcon={({ isActive }) => (
                <PlusOutlined
                  rotate={isActive ? 70 : 0}
                  style={{ fontSize: "30px" }}
                />
              )}
              expandIconPosition={"end"}
            >
              <Panel
                header={
                  <h1 className="mt-[-3%] text-[35px] font-normal ">
                    <AuditOutlined /> Instruction
                  </h1>
                }
                key="1"
              >
                <Instruction />
              </Panel>
            </Collapse>
            <Divider style={{ width: "180%", backgroundColor: "#e4e4e4" }} />
          </div> */}
          {/* <Comment>
            {product.reviews && <CommentComponent reviews={product.reviews} />}
          </Comment> */}
        </div>

        <div className="flex w-[46%] flex-col items-center">
          <h1 className="mt-[-3%] text-[50px] font-normal ">
            <OneToOneOutlined /> About Our Coffee
          </h1>
          <AboutProduct />
        </div>
      </div>
      <Divider />
      <Recommend className="p-2">
        {product.categories && (
          <RecommendProduct products={product.categories[0]} />
        )}
      </Recommend>

      <Newsletter />
      <Footer />
      <FloatButton.BackTop icon={<UpCircleFilled />} />
    </Container>
  );
};

export default Product;
