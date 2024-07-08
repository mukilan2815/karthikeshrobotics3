"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Workshop = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="py-5">
      <h1 className="text-xl font-bold flex justify-center">Workshop</h1>
      <div className="flex items-center justify-center">
        <div className="w-1/2 ml-44">
          <h1 className="font-bold mb-5 text-3xl">
            Wanna Conduct Workshops <br />
            in Your institution?
          </h1>
          <p className="w-1/2">
            Our expert team conducts workshops in your area on Robotics, IoT,
            ROS and Automation. Book now!
          </p>
          <button className="p-2 bg-[#D6FD51] px-5 my-4 hover:bg-[#AEEA00] focus:outline-none">
            Book our Team Now !
          </button>
        </div>
        <div className="w-1/2">
          <img
            src="https://s3-alpha-sig.figma.com/img/1d52/4db3/bd0e4fd58a17e7e856d618a674ab3582?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZvzE0ybzEoAkHtIblFpIdjiKoFtZ-hRf05M3HnF2nJbWjl4w2BRp13~2Vz1AWo7T9TN-KZ-Wxyj~neSpFVYEwaupUoW9RydN0kAiQxSfa0MLUG1oYA94lcymt64zI1efeoxzy3Uo-4Dv21D7RPjx161IbFm0ai08i2M2rArD~WnMn1kWHnJTcqPeXw~uX-kNeA9d4QfqZ3AAeUGJEkPeKGV8qB38VCrCXCMXEU-GcMdi5ha2F~sjbV-zXxpUd~mOYmv7tjY25e3kk00~SYXfZ8rW269cumSlrcXVngTSqanM-H2EHNA1AfjtV0CZETxUcAjMiJv7Am4-7i2biTBfBg__"
            alt=""
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Workshop;
