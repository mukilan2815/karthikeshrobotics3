import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Shopcard = () => {
  return (
    <div className="w-48 pt-10 max-w-sm rounded-lg shadow">
      <a href="#">
        <img
          className="p-2 rounded-lg bg-white"
          src="https://s3-alpha-sig.figma.com/img/67ae/04f8/570d10822680505756d53d10cdeb8057?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eAteNo1J59SmEAyf172QzhWzNy7Ey5uWBp0NA1jnYJc345wF3R1NnUlz0~fmWDmYXghBn70kc64P4bhk7KmoNUAHVd3~r8JWp3a-4cpLii8pBUbzFIiTJefhTTbdqg7JGEgw3V2zmEt~a7eAvS6iMfAifTNZIXM6-ORbAX3ldXAWW7WPgHPI1fmrKYzcWCi~zx1VFaB0-ZPXO28drQSEYxb3-mjntXBR7QpXd6lg3zcbKZR5DHeIUnAAt2bm-JWabJi~TJBIzWPlK1sOlip2HDShIj7BnWRFHxZzvZVVw-Z5Qi~R3GmZ1LzxBcPO1LG7j6mS~3p2oz5gtsTTpRLJsA__"
          alt="product image"
        />
      </a>
      <div className="text-white">
        <h4>HAVIT HV-G92 Gamepad</h4>
        <div className="flex space-x-2">
          <p className="text-[#C8FF2D] font-bold">$120</p>
          <p className=" line-through text-gray-500">$160</p>
        </div>
        <div className="flex items-center my-2 space-x-4">
          <div className="flex items-center w-20">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          </div>
          <p>(88)</p>
        </div>
      </div>
    </div>
  );
};

export default Shopcard;
