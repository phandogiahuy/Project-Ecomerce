import {
  CoffeeOutlined,
  DeploymentUnitOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";
import React from "react";

import { Data, Head, Row, Table } from "./style";

const ProductInfor = ({ place, process, flavor }) => {
  return (
    <Table className=" border-collapse">
      <Row
        style={{
          width: "100%",
          border: "1px solid black",
        }}
      >
        <Head>
          <RadarChartOutlined /> Place
        </Head>
        <Data
          style={{
            width: "100%",
            border: "1px solid black",
          }}
        >
          {place}
        </Data>
      </Row>
      <Row
        style={{
          width: "100%",
          border: "1px solid black",
        }}
      >
        <Head>
          <DeploymentUnitOutlined /> Process
        </Head>
        <Data
          style={{
            width: "100%",
            border: "1px solid black",
          }}
        >
          {process}
        </Data>
      </Row>
      <Row
        style={{
          width: "100%",
          border: "1px solid black",
        }}
      >
        <Head>
          <CoffeeOutlined /> Flavor
        </Head>
        <Data
          style={{
            width: "100%",
            border: "1px solid black",
          }}
        >
          {flavor}
        </Data>
      </Row>
    </Table>
  );
};

export default ProductInfor;
