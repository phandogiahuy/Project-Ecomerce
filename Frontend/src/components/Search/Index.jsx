import React, { useState } from "react";
import { Input, Spin } from "antd";

import { debounce } from "lodash";
import { Link } from "react-router-dom";
import { ContainerSearch, InforSearch } from "./style-search";
import { useGetProductBySearch } from "../../hooks/Queries/Product/useGetProductBySearch";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState(false);

  const debouncedSetQuery = debounce((value) => {
    setSearchQuery(value);
  }, 50);
  const { data, isLoading, isError } = useGetProductBySearch(searchQuery);
  const onChangeHandleSearch = (e) => {
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
          onChange={onChangeHandleSearch}
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
