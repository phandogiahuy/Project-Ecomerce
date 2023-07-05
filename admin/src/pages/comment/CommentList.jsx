import React from "react";
import { useGetProductById } from "../../hooks/Queries/Product/useGetProductById";
import { Skeleton, Rate, Divider } from "antd";

const CommentList = ({ content }) => {
  const { isLoading, data } = useGetProductById(content);

  if (isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }

  return (
    <div>
      <h3>{data.title}</h3>
      {data.reviews.map((review) => (
        <div key={review._id}>
          <div style={{ display: "flex" }}>
            <h2>{review.username}</h2>
            <Rate
              disabled
              defaultValue={review.rating}
              allowHalf
              style={{ marginTop: "16px", marginLeft: "10px" }}
            />
          </div>
          <div style={{ marginTop: "-10px" }}>{review.content}</div>
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
