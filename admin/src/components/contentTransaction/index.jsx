import { Form, Input, Button, Space, List, Card, Divider, Radio } from "antd";
import { ImageProduct, Infor } from "./style";

const Content = ({ order }) => {
  console.log(order);
  return (
    <div>
      <Card hoverable title="Order Information">
        <Infor>
          <div>
            <span style={{ fontSize: "20px", fontWeight: "700" }}>Name: </span>
            <span style={{ fontSize: "20px" }}>{order.name}</span>
          </div>
          <div>
            <span style={{ fontSize: "20px", fontWeight: "700" }}>
              Address:{" "}
            </span>
            <span style={{ fontSize: "20px" }}>{order.address}</span>
          </div>
          <div>
            <span style={{ fontSize: "20px", fontWeight: "700" }}>
              Payment:{" "}
            </span>
            <span style={{ fontSize: "20px" }}>{order.payment}</span>
          </div>
          <Divider>Product</Divider>
        </Infor>
        <ImageProduct>
          <div>
            {order.products.length > 0 &&
              order.products.map((productItem) => (
                <div>
                  <div>
                    <img />
                  </div>
                  <div>
                    <h2></h2>
                    <p> </p>
                  </div>
                  <div></div>
                </div>
              ))}
          </div>
        </ImageProduct>
      </Card>
    </div>
  );
};

export default Content;
