import React from "react";
import Top from "./Top";
import Base from "./Base";

const Product = () => {
  return (
    <div className="w-full max-h-max py-20">
      <div className="w-[90%] mx-auto flex justify-center items-center flex-col">
        <div className="w-[58%]">
          <h1 className="font-medium text-[34px] text-center text-black">Trusted by <span className="text-[green]">200 Million+</span> active users across 54 countries</h1>
        </div>
        <div className="flex items-center flex-col pt-10">
          <Top />
          <Base />
        </div>
      </div>
    </div>
  );
};

export default Product;
