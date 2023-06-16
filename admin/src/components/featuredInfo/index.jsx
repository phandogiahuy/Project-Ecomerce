import { Statistic } from "antd";
import {
  Container,
  Pending,
  Revenue,
  Title,
  Transaction,
  Wrapper,
} from "./style";
import {
  AlertOutlined,
  DollarOutlined,
  SlidersOutlined,
} from "@ant-design/icons";

export const FeaturedInfo = ({ orders }) => {
  const pending = [];
  const revenueDay = [];
  let total = 0;
  if (orders.length > 0) {
    const revenue = [];

    orders.forEach((i) => {
      if (i.status === "success") {
        revenue.push(i.total);
      } else {
        pending.push(i);
      }
    });

    revenue.forEach((item) => {
      total += item;
    });
    revenueDay.push(total);
  }
  return (
    <Container>
      <Wrapper>
        <Transaction>
          <Title>
            <SlidersOutlined />
            Transaction
          </Title>
          <Statistic value={orders.length} />
        </Transaction>
        <Revenue>
          <Title>
            <DollarOutlined />
            Revenue
          </Title>
          <Statistic value={total + "$"} />
        </Revenue>
        <Pending>
          <Title>
            <AlertOutlined />
            Pending
          </Title>
          <Statistic value={pending.length} />
        </Pending>
      </Wrapper>
    </Container>
  );
};
