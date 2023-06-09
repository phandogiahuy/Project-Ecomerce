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
} from "antd";

import {
  UserOutlined,
  SendOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import CommentList from "./CommentList";
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
    <div className="mr-10 p-4">
      <Card
        title={
          <div>
            <h1> Review From User</h1>
            {totalRating > 0 && (
              <div>
                <Rate disabled defaultValue={totalRating} allowHalf />
                {" " + totalRating}
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
              <UserOutlined className="text-[50px]" />
              <p className="">No review</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default CommentComponent;
{
  /* <div>
              <Rate disabled defaultValue={reviews.rating} allowHalf />
            </div> */
}
