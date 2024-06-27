import React from "react";

const Cards = (props) => {
  return (
    <div className=" w-1/6 p-3 bg-white">
      <div className="bg-black w-fit h-fit p-2 rounded-lg">
        <h1 className="text-[#D6FD51] font-bold text-xl">{props.h1}</h1>
        <p className="text-white text-sm">{props.text} </p>
      </div>
    </div>
  );
};

export default Cards;
