import React from "react";
import styled from "styled-components";

import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import PopularProduct from "../components/PopularProduct";

const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  margin-left: 1200px;
  margin-top: 10px;
`;
const Title = styled.h1`
  margin: 40px;
  font-size: 70px;
`;
const Filter = styled.div``;
const FilterText = styled.span`
  font-weight: 700;
`;
const Select = styled.select`
  margin-left: 10px;
  padding: 10px;
`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>PHIN</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Sort</FilterText>
          <Select>
            <Option>Price (ASC)</Option>
            <Option>Price (DESC)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <PopularProduct />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
