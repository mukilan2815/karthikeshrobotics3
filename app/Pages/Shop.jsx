import React from "react";
import Shopcard from "../Components/Shopcard";

const Shop = () => {
  return (
    <div className="bg-[#202020] py-10">
      <h1 className="flex justify-center font-bold text-xl text-white">Shop</h1>
      <h3 className="flex justify-start font-bold text-3xl text-white ml-20">
        Yes We Also Sell Components <br /> At Your Door Step !
      </h3>
      <div className="flex space-x-10 justify-center">
        <Shopcard />
        <Shopcard />
        <Shopcard />
        <Shopcard />
        <Shopcard />
      </div>
    </div>
  );
};

export default Shop;
