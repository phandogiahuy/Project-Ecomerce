import { PlusOutlined } from "@ant-design/icons";
import { Button, Image, InputNumber, Radio, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import Announcement from "../../components/Annoucement/Annoucement";
import Footer from "../../components/Bottom/Footer";
import Navbar from "../../components/Top/Navbar";
import Newsletter from "../../components/Bottom/Newsletter";
import { addProduct } from "../../reduxToolkit/cartRedux";
import { useDispatch } from "react-redux";
import { axiosInstance } from "../../api/requestMethod";
import {
  AddContainer,
  Container,
  Desc,
  FilterContainer,
  FilterTitle,
  ImgContainer,
  InforContainer,
  Price,
  Title,
  Wrapper,
} from "./Style-Product";

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
  const handlePrice = (e) => {
    if (e === 500) {
      setPrice(product.price[1]);
    } else if (e === 1000) {
      setPrice(product.price[2]);
    } else {
      setPrice(product.price[0]);
    }
  };
  const handleClick = () => {
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
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image
            style={{
              width: "560px",
              height: "558px",
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
                onChange={handlePrice}
                style={{ marginLeft: 10 }}
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
              style={{ marginRight: "10px", marginBottom: "1px" }}
              onChange={(e) => setQuanity(e)}
            />
            {}
            <Space wrap>
              <Button
                icon={<PlusOutlined />}
                type="primary"
                style={{ width: "300px" }}
                onClick={handleClick}
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
