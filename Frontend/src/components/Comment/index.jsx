import {
  Avatar,
  Form,
  Button,
  List,
  Input,
  Card,
  Rate,
  Typography,
  Progress,
  Collapse,
} from "antd";

import {
  UserOutlined,
  SendOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  PlusOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import CommentList from "./CommentList";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
const { Text } = Typography;

const CommentComponent = ({ reviews }) => {
  // const ratings = reviews.rating;
  const rate = [];

  reviews.forEach((reviews) => rate.push(reviews.rating));
  const sumOfRatings = rate.reduce((acc, rate) => acc + rate, 0);

  // // Calculate the average rating
  const averageRating = sumOfRatings / rate.length;

  // // Round the average rating to a specific decimal place (e.g., 1 decimal place)
  const totalRating = averageRating.toFixed(1);

  return (
    // <Collapse
    //   defaultActiveKey={["1"]}
    //   style={{ width: "180%", backgroundColor: "white" }}
    //   bordered={false}
    //   expandIcon={({ isActive }) => (
    //     <PlusOutlined rotate={isActive ? 70 : 0} style={{ fontSize: "30px" }} />
    //   )}
    //   expandIconPosition={"end"}
    // >

    <Card
      title={
        <div>
          {totalRating > 0 && (
            <div className="flex">
              <h1 className="font-bold">{" " + totalRating}</h1>
              <div className="ml-3">
                <Rate disabled defaultValue={totalRating} allowHalf />
                <p>{reviews.length} Reviews</p>
              </div>
            </div>
          )}
        </div>
      }
    >
      <div className="mr-5 flex flex-col">
        {reviews.length > 0 ? (
          reviews.map((review) => <CommentList review={review} />)
        ) : (
          <div className="ml-[50%]  ">
            <UserOutlined className="text-[49px]" />
            <p className="">No review</p>
          </div>
        )}
      </div>
    </Card>

    // </Collapse>
  );
};

export default CommentComponent;
{
  /* <div>
              <Rate disabled defaultValue={reviews.rating} allowHalf />
            </div> */
}
