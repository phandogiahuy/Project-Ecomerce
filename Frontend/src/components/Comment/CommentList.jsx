import { Divider, Rate, Typography } from "antd";
import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/vi";
const { Text } = Typography;

const CommentList = ({ review }) => {
  const dateString = review.date;
  const formattedDate = dayjs(dateString).locale("vi").format("D-M-YYYY ");
  return (
    <div className=" flex flex-col">
      <div className="flex items-center  space-x-3">
        <h2 className="text-lg font-medium">{review.user}</h2>
        <h3 className=" mt-1 text-xs text-gray-400">{formattedDate}</h3>
      </div>
      <Rate disabled defaultValue={review.rating} allowHalf />
      <Text>{review.content}</Text>
      <Divider />
    </div>
  );
};

export default CommentList;
