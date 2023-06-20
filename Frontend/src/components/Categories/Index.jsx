import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import { categories } from "../../data";
import CategoriesItem from "./category-item";
import { ContainerCategories } from "./style-category";

const Categories = () => {
  const cat = "phin";
  return (
    <ContainerCategories>
      <div className="flex w-[50%] flex-col ">
        {categories.map((item) => (
          <CategoriesItem item={item} key={item.id} />
        ))}
      </div>
      <div className="relative mr-4 w-[50%]  ">
        <Link to={`products/${cat}`}>
          <img
            src="/Categories/Phin.jpg"
            className="  h-[539px] w-[100%]"
            style={{ imageRendering: "pixelated" }}
          />
        </Link>
        <div className="absolute left-[130px] top-[200px]">
          <h1 className="ml-2 text-[50px] font-bold">PHIN</h1>
          <Space wrap>
            <Link to={`products/phin`}>
              <Button
                style={{
                  display: "flex",
                  backgroundColor: "#add892",
                  letterSpacing: "1px",
                  fontSize: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                SEE MORE
                <ArrowRightOutlined />
              </Button>
            </Link>
          </Space>
        </div>
      </div>
    </ContainerCategories>
  );
};

export default Categories;
