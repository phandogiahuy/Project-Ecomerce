import { PlusOutlined } from "@ant-design/icons";
import { Button, InputNumber, Radio, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { publicRequest } from "../requestMethod";
import { addProduct } from "../reduxToolkit/cartRedux";
import { useDispatch } from "react-redux";

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
const { Option } = Select;
const Product = () => {
  const [type, setType] = useState("Bean");

  const location = useLocation();
  const [quanity, setQuanity] = useState(1);
  const [size, getSize] = useState(250);
  const [price, setPrice] = useState(0);
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/product/find/${id}`);
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
          <Img src={product.img}></Img>
        </ImgContainer>
        <InforContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{price}₫</Price>
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
                onSelect={(i) => getSize(i)}
                onChange={handlePrice}
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
