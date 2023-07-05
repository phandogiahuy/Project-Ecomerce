import "./home.css";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { FeaturedInfo } from "../../components/featuredInfo";
import { useGetOrder } from "../../hooks/Queries/User/Order/useGetOrder";
import { FrownTwoTone } from "@ant-design/icons";
import { Skeleton, Spin } from "antd";
import { useEffect, useState } from "react";

export default function Home() {
  const { isLoading, data: orders, isError } = useGetOrder();
  if (isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }

  if (isError) {
    return (
      <h1 style={{ fontSize: "30px" }}>
        {" "}
        <FrownTwoTone />
        You don't sign in
      </h1>
    );
  }
  return (
    <div className="home">
      <FeaturedInfo orders={orders} />

      <div className="homeWidgets">
        <WidgetLg orders={orders} />
      </div>
    </div>
  );
}
