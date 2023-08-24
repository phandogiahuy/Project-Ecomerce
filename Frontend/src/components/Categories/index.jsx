import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import { categories } from "../../data";
import CategoriesItem from "./category-item";
import { ContainerCategories, Favorite, Phin } from "./style";

const Categories = () => {
  const cat = "phin";
  return (
    <ContainerCategories>
      <div className="flex w-[50%] flex-col ">
        {categories.map((item) => (
          <CategoriesItem item={item} key={item.id} />
        ))}
      </div>
      <div className="relative  flex w-[50%] flex-col ">
        <div>
          <Link to={`products/${cat}`}>
            <img
              src="/Categories/Phin.jpg"
              className="  h-[267px] w-[100%] rounded-sm"
              style={{ imageRendering: "pixelated" }}
            />
          </Link>
          <div className="absolute left-[130px] top-[80px]">
            <Phin className="ml-2 text-[50px] font-bold">PHIN</Phin>
            <Space wrap>
              <Link to={`products/phin`}>
                <Button
                  style={{
                    display: "flex",
                    backgroundColor: "#e8f3e0",
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
        <div>
          <img
            src="/Categories/Ranked.jpg"
            className="  h-[267px] w-[100%] rounded-sm"
            style={{ imageRendering: "pixelated" }}
          />
          <div className="absolute left-[130px] top-[370px]">
            <Favorite className="ml-[-20px] text-[40px] font-bold">
              FAVORITE{" "}
            </Favorite>
            <Space wrap>
              <Link to={`/favorite`}>
                <Button
                  style={{
                    display: "flex",
                    backgroundColor: "#e8f3e0",
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
      </div>
    </ContainerCategories>
  );
};

export default Categories;
