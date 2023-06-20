import React from "react";

const ProductDetailCheckOut = ({ product }) => {
  return (
    <div className="flex justify-evenly		">
      <img className="w-[30%]" src={product.product.img} />
      <div className="flex w-[70%] flex-col justify-center ">
        <div className="text-lg font-bold"> {product.product.title}</div>
        <div className="text-base font-light">
          {product.type} / {product.size}g
        </div>
        <div className="text-base font-light">quanity: {product.quanity}</div>
        <div className="text-base font-medium">{product.price}$</div>
      </div>
    </div>
  );
};

export default ProductDetailCheckOut;
