import { Card, Button, message } from "antd";
import {
  Code,
  ContainerBody,
  ContainerCard,
  ContainerFooter,
  Discount,
} from "./Style-Coupon";

const Coupon = ({ data }) => {
  const handleClickCoupon = () => {
    message.success("Coupon code generated!");

    navigator.clipboard.writeText(data.code);
  };

  return (
    <ContainerCard>
      <Card
        className="coupon-card"
        style={{
          border: "1px solid #1C2F7F",
          backgroundColor: "aliceblue",
        }}
      >
        <ContainerBody>
          <Discount>{data.sale}% off</Discount>
        </ContainerBody>
        <ContainerFooter>
          <Code>
            This discount code will apply with order above {data.limit}$
          </Code>
          <Button
            type="primary"
            onClick={handleClickCoupon}
            style={{
              fontSize: "25px",
              height: "50px",
              width: "150px",
              backgroundColor: "#141246",
              marginTop: "10px",
            }}
          >
            Copy
          </Button>
        </ContainerFooter>
      </Card>
    </ContainerCard>
  );
};

export default Coupon;