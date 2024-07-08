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
              src="https://s3-alpha-sig.figma.com/img/5488/0a2a/03056713eb60d47d374633107d60acf6?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=koskzwjM-Cy8CTOigOfipHkw7vPo0JEUvrVmqWjEL7ZI0msGIib66-1lVj5gixFljWgsGJUtX52~xYVNY9JEpxuuZP9wRp2uvJ2JdsjcCOXc6bSfq8S~NBy097kgGPzFB8IStgQcpwfiUCnY1we2NCcSvaIVKnitEO5iqaJHTWMhlLFVJ1I183tmpQvTduoedZEhz3CS7j2BFatzxv2TVvoUfo2HrR7rHG90OXT6ewqtL45Istj1NA55gAcmrMDvykEz8wPTu6e5SQuim1UaXg~wbNlOe3UrljgxZDH~bhCPzg12BSrCoS0RLRERVA420Eh2ZG-WsFQHGhJLoT-ygw__"
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
