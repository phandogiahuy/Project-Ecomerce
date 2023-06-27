import { Skeleton } from "antd";

import { useGetProductByCat } from "../../hooks/Queries/Product/useGetProductByCat";
import RecommendList from "./RecommendList";
import { Wrapper } from "./style-recommend";

const RecommendProduct = ({ products }) => {
  const res = useGetProductByCat(products);
  if (res.isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <h1>Related Products</h1>
      <Wrapper>
        {res.data.slice(0, 4).map((product) => (
          <RecommendList products={product} key={product._id} />
        ))}
      </Wrapper>
    </div>
  );
};

export default RecommendProduct;
