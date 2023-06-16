import { Button, Row, Space } from "antd";
import React from "react";

import { categories } from "../../data";
import CategoriesItem from "./category-item";
import { Container, ContainerCategories, Title } from "./style-category";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <ContainerCategories>
      <div className="flex w-[50%] flex-col ">
        {categories.map((item) => (
          <CategoriesItem item={item} key={item.id} />
        ))}
      </div>
      <div className="relative w-[50%]  ">
        <Link to={`products/phin`}>
          <img src="/Categories/Phin.jpg" className="h-[90%] w-[100%]" />
        </Link>
        <div className="absolute left-[200px] top-[290px]">
          <h1 className="ml-2 font-bold text-[50px]">PHIN</h1>
          <Space wrap>
            <Link to={`products/phin`}>
              <Button
                style={{
                  display: "flex",
                  backgroundColor: "#68c42e",
                  letterSpacing: "1px",
                  fontSize: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                SEE MORE
              </Button>
            </Link>
          </Space>
        </div>
      </div>
    </ContainerCategories>
  );
};

export default Categories;
