import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#DDDDDD]">
      <div className="flex space-x-10 justify-evenly bg-[#DDDDDD] py-10">
        <div>
          <h1 className="text-2xl font-bold">
            KarthiKesh Robotics Private Limited
          </h1>
          <p>Future is Here!</p>
        </div>
        <div>
          <h1 className="font-bold text-xl">COMPANY</h1> <h1>ABOUT</h1>{" "}
          <h1>FEATURE</h1> <h1>WORKS</h1> <h1>CAREER</h1>
        </div>
        <div>
          <h1 className="font-bold text-xl">HELP</h1> <h1>CUSTOMER SUPPORT</h1>{" "}
          <h1>DELIVERY DETAILS</h1> <h1>TERMS & CONDITIONS</h1>{" "}
          <h1>PRIVACY POLICY</h1>
        </div>
        <div>
          <h1 className="font-bold text-xl">FAQ</h1> <h1>Account</h1>{" "}
          <h1>Manage Delivery</h1> <h1>Orders</h1> <h1>Payments</h1>
        </div>
        <div>
          <h1 className="font-bold text-xl">RESOURCES</h1> <h1>Free ebooks</h1>{" "}
          <h1>Development Tutorials</h1> <h1>How to - Blog</h1> <h1>Youtube</h1>
        </div>
      </div>
      <p className="flex justify-center">
        Copyrights reserved by Karthikesh Robotics
      </p>
    </div>
  );
};

export default Footer;
