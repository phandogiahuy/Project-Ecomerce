/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
import { FormOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Modal, Rate, Space, Tooltip } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useGetUser } from "../../hooks/Queries/User/useGetUser";
import ReviewModal from "../Review";
import CommentList from "./ListComment";

const CommentComponent = ({ reviews, id, name }) => {
  const token = localStorage.getItem("token");
  const rate = [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useGetUser();
  if (user.isLoading) {
    <div>...</div>;
  }
  const showModal = () => {
    setIsModalOpen(true);
  };
  const userID = [];
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  reviews.forEach((reviews) => rate.push(reviews.rating));
  const sumOfRatings = rate.reduce((acc, rate) => acc + rate, 0);
  reviews.forEach((review) => userID.push(review.userId));
  // // Calculate the average rating
  const averageRating = sumOfRatings / rate.length;
  const navigate = useNavigate();
  // // Round the average rating to a specific decimal place (e.g., 1 decimal place)
  const totalRating = averageRating.toFixed(1);
  const handleClickNavigate = () => {
    navigate("/login");
  };
  return (
    <Card
      title={
        <div>
          {totalRating > 0 && (
            <div className="flex ">
              <h1 className="font-bold">{` ${totalRating}`}</h1>
              <div className="ml-3">
                <Rate disabled defaultValue={totalRating} allowHalf />
                <p>{reviews.length} Reviews</p>
              </div>
              <div className=" ml-[20px] mt-[2%]">
                <Space wrap>
                  {token ? (
                    userID.includes(user?.data?._id) ? (
                      <Button
                        style={{
                          display: "flex",
                          backgroundColor: "#eaf0ff",
                          letterSpacing: "1px",
                          fontSize: "24px",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "200px",
                        }}
                        onClick={showModal}
                        disabled
                      >
                        <Tooltip title="You reviewed this product">
                          Review
                        </Tooltip>
                        <FormOutlined />
                      </Button>
                    ) : (
                      <Button
                        style={{
                          display: "flex",
                          backgroundColor: "#eaf0ff",
                          letterSpacing: "1px",
                          fontSize: "24px",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "200px",
                        }}
                        onClick={showModal}
                      >
                        Review
                        <FormOutlined />
                      </Button>
                    )
                  ) : (
                    <Button
                      style={{
                        display: "flex",
                        backgroundColor: "#eaf0ff",
                        letterSpacing: "1px",
                        fontSize: "24px",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "250px",
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
      }
    >
      <div className="mr-5 flex flex-col">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <CommentList review={review} key={review._id} />
          ))
        ) : (
          <div className=" flex flex-col items-center  ">
            <UserOutlined className="text-[60px]" />
            <p className="">No review</p>
            <div className=" mt-[1%] p-2">
              <Space wrap>
                {token ? (
                  <Button
                    style={{
                      display: "flex",
                      backgroundColor: "#eaf0ff",
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
                      backgroundColor: "#eaf0ff",
                      letterSpacing: "1px",
                      fontSize: "24px",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "300px",
                      marginLeft: "80px",
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
