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
            src="https://s3-alpha-sig.figma.com/img/3df3/e2b3/0381866fb50add01b545366b08ec5172?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZqfD502kHh3~~ycfmtufFRJq6css4D-lyhvRkoiNqn8Y919w13PFmVzKNOZ00M1bV19J29qd3qdeefB881G5eElmhB-SCxBFx~ovxZxDodVMWSgPVoUiIUKJOI1ifTj-hz~YSALIPA-oJkM9LmnsSVXAnUmn-i6TRjvTA2JJM9emGcfQSRFChwYmRgfl-PxIC1ICJkXC0IDCiw-SzbfuaHPmbpbV~E0hi1xrQADaFWg5DMJI56lWlShK7c2Cmxm~1XU-lWa9DUQa2ZcNp70EbIjfAE3T-MjuEnlyhsE3RgjQMjj1~z~qtZvVUHTzE24vuqsdZNSA8gx81hVzrxbqqQ__"
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
