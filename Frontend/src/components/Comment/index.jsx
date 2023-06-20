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
  Space,
  Modal,
} from "antd";

import {
  UserOutlined,
  SendOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  PlusOutlined,
  HeartOutlined,
  ArrowRightOutlined,
  FormOutlined,
} from "@ant-design/icons";
import CommentList from "./CommentList";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { useState } from "react";
import ReviewModal from "../Review";
import { useNavigate } from "react-router-dom";
const { Text } = Typography;

const CommentComponent = ({ reviews, id, name }) => {
  // const ratings = reviews.rating;
  const token = localStorage.getItem("token");
  const rate = [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  reviews.forEach((reviews) => rate.push(reviews.rating));
  const sumOfRatings = rate.reduce((acc, rate) => acc + rate, 0);

  // // Calculate the average rating
  const averageRating = sumOfRatings / rate.length;
  const navigate = useNavigate();
  // // Round the average rating to a specific decimal place (e.g., 1 decimal place)
  const totalRating = averageRating.toFixed(1);
  const handleClickNavigate = () => {
    navigate("/login");
  };
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
            <div className="flex ">
              <h1 className="font-bold">{" " + totalRating}</h1>
              <div className="ml-3">
                <Rate disabled defaultValue={totalRating} allowHalf />
                <p>{reviews.length} Reviews</p>
              </div>
              <div className="ml-[25%] mt-[1%]">
                <Space wrap>
                  {token ? (
                    <Button
                      style={{
                        display: "flex",
                        backgroundColor: "#dcffc6",
                        letterSpacing: "1px",
                        fontSize: "30px",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "200px",
                      }}
                      onClick={showModal}
                    >
                      Review
                      <FormOutlined />
                    </Button>
                  ) : (
                    <Button
                      style={{
                        display: "flex",
                        backgroundColor: "#dcffc6",
                        letterSpacing: "1px",
                        fontSize: "30px",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "200px",
                      }}
                      onClick={showModal}
                    >
                      Sign in to review
                      <FormOutlined />
                    </Button>
                  )}
                </Space>
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
            <div className="ml-[-20%] mt-[1%] p-2">
              <Space wrap>
                {token ? (
                  <Button
                    style={{
                      display: "flex",
                      backgroundColor: "#dcffc6",
                      letterSpacing: "1px",
                      fontSize: "30px",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "200px",
                    }}
                    onClick={handleClickNavigate}
                  >
                    Review
                    <FormOutlined />
                  </Button>
                ) : (
                  <Button
                    style={{
                      display: "flex",
                      backgroundColor: "#dcffc6",
                      letterSpacing: "1px",
                      fontSize: "30px",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "300px",
                      marginLeft: "-50px",
                    }}
                    onClick={handleClickNavigate}
                  >
                    Sign in to review
                    <FormOutlined />
                  </Button>
                )}
              </Space>
            </div>
          </div>
        )}
      </div>
      <Modal
        title="New Review"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <ReviewModal id={id} name={name} handleCancel={handleCancel} />
      </Modal>
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
