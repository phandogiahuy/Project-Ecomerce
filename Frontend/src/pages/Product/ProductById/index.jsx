import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Divider,
  Image,
  InputNumber,
  Radio,
  Rate,
  Select,
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
  ProductFeature,
  Recommend,
  Title,
  Wrapper,
} from "./style";
import Navbar from "../../../components/NavBar/Index";
import Announcement from "../../../components/Annoucement/Index";
import Newsletter from "../../../components/Footer/Newsletter";
import Footer from "../../../components/Footer/Footer";
import CommentComponent from "../../../components/Comment";
import PopularProduct from "../../../components/Product/PopularProduct";
import RecommendProduct from "../../../components/Recommend";
import ProductInfor from "../../../components/ProductFeature";

const Product = () => {
  const [type, setType] = useState("Bean");

  const location = useLocation();
  const [quanity, setQuanity] = useState(1);
  const [size, setSize] = useState(250);
  const [price, setPrice] = useState(0);
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axiosInstance.get(`/product/find/${id}`);
        setProduct(res.data);
        setPrice(res.data.price[0]);
      } catch (error) {}
    };
    getProduct();
  }, [id]);
  const onSelectProductSizeChange = (e) => {
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
    dispatch(
      addProduct({
        product,
        price: price,
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
  if (product.reviews) {
    console.log();
  }
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image
            style={{
              width: "120%",
              imageRendering: "pixelated",
            }}
            width={500}
            src={product.img}
          ></Image>
        </ImgContainer>

        <InforContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{price}$</Price>
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
      <div className="flex w-[100%] p-4">
        <ProductFeature>
          <h1>Product Feature</h1>
          <ProductInfor
            place={product.place}
            flavor={product.flavor}
            process={product.process}
          />
        </ProductFeature>
        <Comment>
          {product.reviews && <CommentComponent reviews={product.reviews} />}
        </Comment>
      </div>
      <Divider />
      <Recommend className="p-2">
        {product.categories && (
          <RecommendProduct products={product.categories[0]} />
        )}
      </Recommend>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
