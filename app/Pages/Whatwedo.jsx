"use client";
import React, { useEffect } from "react";
import Cards from "../Components/Cards";
import "aos/dist/aos.css";
import AOS from "aos";

const Whatwedo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
    });
  }, []);
  return (
    <div>
      <div className="mt-20 pt-10 bg-slate-200 z-10">
        <h1 className="font-bold text-black text-3xl flex justify-center items-center">
          What we do
        </h1>
        <div>
          <div className="flex justify-evenly py-10">
            <Cards
              h1="Robotics Solution"
              text="Autonomous robots represent the cutting edge of modern technology, designed to operate independently without human intervention."
              className="-mt-10 -ml-10"
              data-aos="fade-right"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/5488/0a2a/03056713eb60d47d374633107d60acf6?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KLx5B~3Wts5nBw34NprvFWbM1pUxs1YOqbSkRyCPcz7jr~dfcjy27n8Ax5zjrfIJJDucIjoJzOrez5~ReE8SIay0wwAMeCnAfw5hZzbbJUqXFnXr9SdTD~gG6IPmSXheLS3aQ00GugBQxQ-QooyBIf6Mmrz5AJFDhH5qpe8aUsWmke1Lp8nFMfQUpb5VbnUoYQM47DqGJKcc~JRwVzO1AWPzYUcsNIMudBAjar5K3~rxzFJomJRTtcesCEQ8RwTJubdSwsGx~TU8CIdmf9itqsDGnQvlN9oZesigWctml7VYUn6-9Mdt809UzzRg0qKn1LjVKn0mvTw-AnkECHJQ3Q__"
              alt=""
              className="absolute w-1/6 z-0"
            />
            <Cards
              h1="IOT Solution"
              text="Autonomous robots represent the cutting edge of modern technology, designed to operate independently without human intervention."
              className="fixed-card"
              data-aos="fade-right"
            />
          </div>
          <div className="flex justify-evenly py-10">
            <Cards
              h1="Mentorship Programs"
              text="Autonomous robots represent the cutting edge of modern technology, designed to operate independently without human intervention."
              className="fixed-card"
              data-aos="fade-right"
            />
            <Cards
              h1="Workshop & Events"
              text="Autonomous robots represent the cutting edge of modern technology, designed to operate independently without human intervention."
              className="fixed-card"
              data-aos="fade-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
