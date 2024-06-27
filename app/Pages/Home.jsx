"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar";
import Excel from "../Components/Excel";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex flex-row items-center md:flex-row">
        <div className="md:w-1/2 p-8 ml-20">
          <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">
            Our Autonomous Robots Will Simplify Your <br /> Work !
          </h1>
        </div>
        <div className="md:w-1/2 p-8">
          <img
            src="https://s3-alpha-sig.figma.com/img/3df3/e2b3/0381866fb50add01b545366b08ec5172?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LBmOdup3R6tipOZR1GN55O4CCf7iYd~MwRvwDSuhgcVN61UzzT919OFhd7SkBK8853naO9qaaRYl7iK2mLJO0G1iHefoM2uPidHki8obZZPVbeOo~q6B3Y1z-JwhL-fx3jHGVwiZqMoyH5ZerM2f-HXfIrzguTINER3PX55BqfF-kU2Kby07H2nEi1eKIWcOJcTIsHofo7kIL8PS12Jm4nixl0ICckxkkmEERJitPPN8kLHc1aQLfuaPINd1-fr170fH17sW6tspNYz0NV~NFK4E7fGbo2ELnH89uBJfQwoVazpV97naWgvZq26wgSRz5GD-n7qrwKBseI2LzerYfg__"
            alt="Image"
            className="w-full h-1/3 "
            data-aos="fade-up"
          />
        </div>
      </div>
      <Excel />
    </div>
  );
};

export default Home;
