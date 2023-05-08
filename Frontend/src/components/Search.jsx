import React, { useState } from "react";
import { Input, Spin } from "antd";
import { useSearch } from "../hooks/detail/useProductBySearch";
import styled from "styled-components";
import { mobile } from "../responsive";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
const ContainerSearch = styled.div`
  ${mobile({ marginBottom: "30px", marginRight: 10 })}
`;
const InforSearch = styled.div`
  display: flex;
  padding: 10px;
`;
const { Search } = Input;
const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState(false);

  const debouncedSetQuery = debounce((value) => {
    setSearchQuery(value);
  }, 5);
  const { data, isLoading, isError } = useSearch(searchQuery);
  const handleSearch = (e) => {
    debouncedSetQuery(e.target.value);
    setType(true);
    if (!e.target.value) {
      setType(false);
    }
  };

  return (
    <div>
      <ContainerSearch>
        <Input
          placeholder="search... "
          allowClear
          size="medium"
          value={searchQuery}
          onChange={handleSearch}
        />
        {isLoading ? (
          <Spin style={{}} />
        ) : isError ? (
          <div>Error fetching search results</div>
        ) : data && type ? (
          <ul
            style={{
              listStyle: "none",
              padding: "10px",
              width: "300px",
              height: "fit-content",
            }}
          >
            {data.map((result) => (
              <li key={result._id}>
                <Link
                  to={`/product/${result._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <InforSearch>
                    <img src={result.img} style={{ width: "40%" }} />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h1
                        style={{
                          fontSize: "15px",
                          padding: 5,
                          fontWeight: "500",
                        }}
                      >
                        {result.title}
                      </h1>
                      <h1
                        style={{
                          fontSize: "15px",
                          padding: 5,
                          fontWeight: "500",
                        }}
                      >
                        {result.price[0]}$
                      </h1>
                    </div>
                  </InforSearch>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ padding: 20 }}> No item</p>
        )}
      </ContainerSearch>
    </div>
  );
};

export default SearchInput;
