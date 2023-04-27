import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import PopularProduct from "../components/PopularProduct";

const Container = styled.div``;
const FilterContainer = styled.div`
  margin-left: 1200px;
  margin-top: 10px;
  position: absolute;
  top: 280px;
  left: 80px;
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
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [sort, setSort] = useState("newest");
  const handleSort = (e) => {
    setSort(e.target.value);
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <FilterContainer>
        <Filter>
          <FilterText>Sort</FilterText>
          <Select name="price" onChange={handleSort}>
            <Option value="newest">Newest</Option>
            <Option value="ASC">Price (ASC)</Option>
            <Option value="DESC">Price (DESC)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <PopularProduct cat={cat} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
