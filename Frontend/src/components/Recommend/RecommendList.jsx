import { Badge, Card, Image, Rate } from "antd";
import React, { useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const { Meta } = Card;

const RecommendList = (products) => {
  const rate = [];
  const url = useLocation();
  products.products.reviews.forEach((review) => rate.push(review.rating));
  const sumOfRatings = rate.reduce((acc, rate) => acc + rate, 0);

  // // Calculate the average rating
  const averageRating = sumOfRatings / rate.length;
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [url]);
  // // Round the average rating to a specific decimal place (e.g., 1 decimal place)
  const totalRating = averageRating.toFixed(1);
  return (
    <div key={products.products._id}>
      <Link
        to={`/product/${products.products._id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        {products.products.sale > 0 ? (
          <Badge
            count={"-" + products.products.sale + "%"}
            style={{
              zIndex: "1",
              marginRight: "100px",
              marginTop: "50px",
              fontSize: "20px",
              color: "yellow",
            }}
            color="black"
          >
            <Card
              hoverable
              style={{
                maxWidth: 330,
                minHeight: 420,
                maxHeight: 420,
              }}
              cover={
                <img
                  alt={products.products.title}
                  src={products.products.img}
                />
              }
            >
              <div className="  mt-[-5%] text-ellipsis font-semibold ">
                {products.products.title}
              </div>
              <div className="mt-[-1%] flex  text-base ">
                <div className="   text-lg font-bold">
                  {Math.ceil(
                    products.products.price[0] *
                      (1 - products.products.sale / 100)
                  )}
                  $
                  <span className="text-slate-300 line-through">
                    ({products.products.price[0]}$)
                  </span>
                </div>
                <div className=" justify-item-end  text-[15px] ">
                  <Rate
                    disabled
                    value={totalRating}
                    allowHalf
                    className=" mt-[-2%]"
                  />
                  ({products.products.reviews.length} reviews)
                </div>
              </div>
            </Card>
          </Badge>
        ) : (
          <Card
            hoverable
            style={{
              maxWidth: 300,
              minHeight: 420,
              maxHeight: 420,
            }}
            cover={
              <img alt={products.products.title} src={products.products.img} />
            }
          >
            <div className="  text-ellipsis font-semibold ">
              {products.products.title}
            </div>
            <div className="mt-[5%] flex justify-around text-base ">
              <div className="text-lg font-bold">
                {products.products.price[0] + "$"}
              </div>
              <Rate
                disabled
                value={totalRating}
                allowHalf
                className="ml-[10%] mt-[-2%]"
              />
              <div className="mt-[2%] text-[10px]">
                ({products.products.reviews.length} reviews)
              </div>
            </div>
          </Card>
        )}
      </Link>
    </div>
  );
};

export default RecommendList;
