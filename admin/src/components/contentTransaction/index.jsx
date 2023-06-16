import {
  Form,
  Input,
  Button,
  Space,
  List,
  Card,
  Divider,
  Radio,
  Tag,
} from "antd";
import { ImageProduct, Infor, Total } from "./style";

const Content = ({ order }) => {
  console.log(order);
  let color;
  if (order.status === "success") {
    color = "#87d068";
  } else {
    color = "#f50";
  }
  return (
    <div>
      <Card hoverable title="Order Information" style={{ width: "100%" }}>
        <Infor>
          <div>
            <span style={{ fontSize: "20px", fontWeight: "700" }}>Name: </span>
            <span style={{ fontSize: "20px" }}>{order.name}</span>
          </div>
          <div>
            <span style={{ fontSize: "20px", fontWeight: "700" }}>Phone: </span>
            <span style={{ fontSize: "20px" }}>0{order.phone}</span>
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
                <div style={{ display: "flex" }} key={productItem._id}>
                  <div style={{ width: "40%" }}>
                    <img
                      src={productItem.product.img}
                      style={{ width: "120%" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "50%",
                    }}
                  >
                    <h5 style={{ fontSize: "15px" }}>
                      {productItem.product.title}{" "}
                    </h5>
                    <p style={{ fontWeight: "500" }}>
                      Quantity: {productItem.quantity}
                    </p>
                    <p>
                      {productItem.type} / {productItem.size}g
                    </p>
                  </div>
                  <div
                    style={{
                      width: "10%",
                    }}
                  >
                    {productItem.size === 250 ? (
                      <h5 style={{ fontSize: "20px" }}>
                        {productItem.product.price[0] *
                          (1 - productItem.product.sale / 100) *
                          productItem.quantity}
                        $
                      </h5>
                    ) : productItem.size === 500 ? (
                      <h5 style={{ fontSize: "20px" }}>
                        {productItem.product.price[1] *
                          (1 - productItem.product.sale / 100) *
                          productItem.quantity}
                        $
                      </h5>
                    ) : (
                      <h5 style={{ fontSize: "20px" }}>
                        {productItem.product.price[2] *
                          (1 - productItem.product.sale / 100) *
                          productItem.quantity}
                        $
                      </h5>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </ImageProduct>
        <Total>
          <h4>Shipping: {order.shipping}$</h4>
          <span style={{ fontSize: "20px", fontWeight: "700" }}>Total: </span>
          <span style={{ fontSize: "20px" }}>{order.total} $</span>
        </Total>

        <Tag color={color} style={{ width: "100%" }}>
          <center style={{ fontSize: "20px" }}>
            {order.status.toUpperCase()}{" "}
          </center>
        </Tag>
      </Card>
    </div>
  );
};

export default Content;
