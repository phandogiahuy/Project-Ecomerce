import React, { useState } from "react";
import { Badge, Empty, Input, Spin } from "antd";

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
  console.log(data);
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
          onKeyDown={(evt) => {
            if (["[", "]"].includes(evt.key)) {
              evt.preventDefault();
            }
          }}
        />
        {isLoading ? (
          <Spin className="mr-[50%] mt-2" />
        ) : isError ? (
          <div>
            <Empty />
          </div>
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
              <Badge
                count={"-" + result.sale + "%"}
                style={{
                  zIndex: "1",
                  marginRight: "250px",
                  marginTop: "20px",
                  fontSize: "10px",
                  color: "yellow",
                }}
                color="black"
              >
                <li key={result._id}>
                  <Link
                    to={`/product/${result._id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <InforSearch>
                      <img src={result.img} style={{ width: "100%" }} />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "10px",
                        }}
                      >
                        <h1
                          style={{
                            fontSize: "12px",
                            padding: 2,
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
                          {Math.ceil(result.price[0] * (1 - result.sale / 100))}
                          $
                          <span className="text-slate-300 line-through">
                            ({result.price[0]}$)
                          </span>
                        </h1>
                      </div>
                    </InforSearch>
                  </Link>
                </li>
              </Badge>
            ))}
          </ul>
        ) : (
          <p style={{ padding: 20 }}>
            <Empty />
          </p>
        )}
      </ContainerSearch>
    </div>
  );
};

export default SearchInput;
